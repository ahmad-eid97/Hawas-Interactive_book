//== Hooks
import { useRouter } from "next/navigation";

export default function () {
  const router = useRouter();

  return {
    router
  }
}