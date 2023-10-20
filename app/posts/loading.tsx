import Container from "@/components/Container";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <Container>
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="border-2 border-gray-200 rounded-md p-4">
            <Skeleton className=" h-[25px] w-[100px] rounded-md mb-2" />{" "}
            {/* For title */}
            <Skeleton className="w-full h-[150px] rounded-md" />{" "}
            {/* For content */}
          </div>
        ))}
      </div>
    </Container>
  );
}
