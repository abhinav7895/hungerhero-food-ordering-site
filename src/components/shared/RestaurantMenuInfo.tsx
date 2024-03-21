import MenuItems from "./MenuItems";

const RestaurantMenuInfo = ({menuInfo, resCart} : {menuInfo : any, resCart : any}) => {

  return (
    menuInfo.map((menu:any) => {
        return menu?.card?.card?.itemCards ? <MenuItems {...menu?.card?.card}
        resCart={resCart} /> : null;
    })
  )
}

export default RestaurantMenuInfo