import { BellRing, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import Loading from "@/app/loading";
import Image from "next/image";

type CardProps = React.ComponentProps<typeof Card>;

const content = [
  {
    image:
      "https://images.unsplash.com/photo-1682687220363-35e4621ed990?auto=format&fit=crop&q=80&w=3087&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function CardDemo({ className, ...props }: CardProps) {
  return (
    <Card>
      <CardContent>
        <Image src={content[0].image} alt="poops" height={100} width={50} />
      </CardContent>
    </Card>
  );
}
