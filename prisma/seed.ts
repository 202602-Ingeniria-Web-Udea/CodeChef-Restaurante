import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  // 1. Limpiar (en orden: primero lo que depende de otras tablas)
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.recipe.deleteMany();
  await prisma.inventoryTransaction.deleteMany();
  await prisma.product.deleteMany();
  await prisma.ingredient.deleteMany();
  await prisma.user.deleteMany();

  // 2. Usuarios
  const admin = await prisma.user.create({
    data: {
      name: "Admin",
      email: "admin@codechef.com",
      password: await bcrypt.hash("admin123", 10),
      role: "ADMIN",
    },
  });

  await prisma.user.create({
    data: {
      name: "Cliente Prueba",
      email: "cliente@codechef.com",
      password: await bcrypt.hash("cliente123", 10),
    },
  });

  // 3. Ingredientes
  const pan = await prisma.ingredient.create({
    data: { name: "Hamburger bun", unit: "UNITS", stock: 50, createdById: admin.id },
  });
  const carne = await prisma.ingredient.create({
    data: { name: "Beef patty", unit: "UNITS", stock: 40, createdById: admin.id },
  });
  const tomate = await prisma.ingredient.create({
    data: { name: "Tomato", unit: "KG", stock: 5, createdById: admin.id },
  });

  // 4. Producto con su receta
  await prisma.product.create({
    data: {
      name: "Classic Burger",
      price: 18000,
      category: "Burgers",
      recipes: {
        create: [
          { ingredientId: pan.id, quantityUsed: 1 },
          { ingredientId: carne.id, quantityUsed: 1 },
          { ingredientId: tomate.id, quantityUsed: 0.05 },
        ],
      },
    },
  });

  console.log("Seed completed ✅");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());