//== Hooks
import { useRouter } from "next/navigation";

export default function useLogic() {
  const router = useRouter();

  return {
    router
  }
}