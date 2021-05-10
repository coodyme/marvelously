export default interface IRouter {
  path: string
  name: string
  exact: boolean
  component: any
  props?: any
}
