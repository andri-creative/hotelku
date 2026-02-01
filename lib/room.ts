import { prisma } from "@/lib/prisma";
import { get } from "node:http";

const getRooms = () => {
  const getAllRooms = async () => {
    try {
      const rooms = await prisma.room.findMany();
      return rooms;
    } catch (error) {
      console;
    }
  };

  const getRoomById = async (id: string) => {
    try {
      const room = await prisma.room.findUnique({
        where: { id },
      });
      return room;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getAllRooms,
    getRoomById,
  };
};

export default getRooms;
