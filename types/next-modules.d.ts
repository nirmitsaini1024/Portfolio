declare module "next/image" {
  import Image from "next/dist/shared/lib/image-external";

  export * from "next/dist/shared/lib/image-external";
  export default Image;
}

declare module "next/link" {
  import Link from "next/dist/client/link";

  export * from "next/dist/client/link";
  export default Link;
}
