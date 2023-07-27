import { Tabs } from "antd";
import { Fragment } from "react"

const Account = () => {
    let items=["Information","Password"].map((item)=>(
        {
            label:item,
            key:item,
            children:item,
        }
    ))
  return (
    <Fragment>
         <Tabs
    defaultActiveKey="1"
    centered
    items={items}
   
  />
    </Fragment>
  )
}

export default Account