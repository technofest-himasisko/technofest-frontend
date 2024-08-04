import CommonPageContainer from "@/ui/molecules/common-page-container";
import MerchandiseHeader from "@/ui/organisms/merchandise/header";
import MerchandiseOrderForm from "@/ui/organisms/merchandise/order-form";
import MerchandiseProducts from "@/ui/organisms/merchandise/products";
import MerchandiseProvisions from "@/ui/organisms/merchandise/provisions";
import { notFound } from "next/navigation";

export default function Page() {
  return notFound();

  // return (
  //   <CommonPageContainer>
  //     <MerchandiseHeader />
  //     <MerchandiseProducts />
  //     <MerchandiseProvisions />
  //     <MerchandiseOrderForm />
  //   </CommonPageContainer>
  // );
}
