import { redirect } from "next/navigation";
import OrderSuccess from "@components/OrderSuccess";
import { retrieveSession } from "@actions";

type ParamsProp = {
  session_id: string
}

type OrderSuccessProps = {
  searchParams: ParamsProp
}

export default async function OrderSuccessPage({ searchParams }: OrderSuccessProps): Promise<React.JSX.Element> {
  if (!searchParams.session_id) redirect('/order/error')

  // retrieve checkout session
  const checkoutSession = await retrieveSession(searchParams.session_id)

  // console.log(checkoutSession.payment_intent)
  // console.log(checkoutSession.line_items)
  
  return (
    <main>
      <OrderSuccess />
    </main>
  )
}