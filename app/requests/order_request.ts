type OrderRequest = {
  service_id: string
  payment_method: string
  total_order: number
  discount: number
  total_pay: number
}

export default OrderRequest
