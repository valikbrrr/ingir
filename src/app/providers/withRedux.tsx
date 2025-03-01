import { store } from "@app/redux"
import { Provider } from "react-redux"

export const withStore = (children: Function) => () => {
    return <Provider store={store}>{children()}</Provider>
}