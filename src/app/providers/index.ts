import compose from "compose-function"
import { withStore } from "./withRedux"

export const withProviders = compose(withStore)