import { prisma } from "@/lib/prisma";

async function main() {
  console.log("🌱 Start seeding...");

  /* =========================
     ROOM TYPES
  ========================= */
  const deluxe = await prisma.roomType.create({
    data: {
      id: "rt-deluxe",
      name: "Deluxe Room",
      description: "Kamar deluxe dengan AC & TV",
      price: 500000,
      capacity: 2,
    },
  });

  const superior = await prisma.roomType.create({
    data: {
      id: "rt-superior",
      name: "Superior Room",
      description: "Kamar superior dengan AC, TV, dan minibar",
      price: 750000,
      capacity: 2,
    },
  });

  const standard = await prisma.roomType.create({
    data: {
      id: "rt-standard",
      name: "Standard Room",
      description: "Kamar standard dengan fasilitas dasar",
      price: 350000,
      capacity: 2,
    },
  });

  /* =========================
     ROOMS
  ========================= */
  await prisma.room.createMany({
    data: [
      // Deluxe Rooms
      {
        id: "r-101",
        roomNumber: "101",
        roomTypeId: deluxe.id,
        isActive: true,
      },
      {
        id: "r-102",
        roomNumber: "102",
        roomTypeId: deluxe.id,
        isActive: true,
      },

      // Superior Rooms
      {
        id: "r-201",
        roomNumber: "201",
        roomTypeId: superior.id,
        isActive: true,
      },
      {
        id: "r-202",
        roomNumber: "202",
        roomTypeId: superior.id,
        isActive: true,
      },

      // Standard Rooms
      {
        id: "r-301",
        roomNumber: "301",
        roomTypeId: standard.id,
        isActive: true,
      },
      {
        id: "r-302",
        roomNumber: "302",
        roomTypeId: standard.id,
        isActive: true,
      },
    ],
  });

  console.log("✅ Seeding finished.");
}

main()
  .catch((e) => {
    console.error("❌ Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
