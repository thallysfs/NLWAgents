import { useQuery } from "@tanstack/react-query";

export function CreateRoom() {
  const {} = useQuery({
    queryKey: ["get-rooms"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3333/room");
      const data = await response.json();

      return data;
    },
  });

  return <div>Create Room</div>;
}
