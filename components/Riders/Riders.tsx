import s from "./Riders.module.scss";
import Rider from "@/bases/Rider";
import { useOrders } from "@/contexts/Orders.context";
import { useRiders } from "@/contexts/Riders.context";

export default function Riders() {
  const { riders } = useRiders();
  const { orders } = useOrders();

  const undeliveredRiders = riders.filter(rider => {
    const isOrderDelivered = orders.some(order => {
      return order.id === rider.orderWanted && order.state === "DELIVERED"
    })
    return !isOrderDelivered
  })

  return (
    <section className={s["pk-riders__container"]}>
      <div className={s["pk-riders"]}>
        <h3>Riders:</h3>
        {undeliveredRiders.map((rider) =>
          <Rider key={rider.orderWanted} {...rider} />
        )}
      </div>
    </section>
  );
}
