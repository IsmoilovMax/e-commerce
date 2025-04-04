import { IProduct } from "@/types"
import { boolean } from "zod"
import { create } from "zustand"


type Store = {
  product: IProduct | null
  setProduct: (product: IProduct | null) => void
  open: boolean
  setOpen: (open: boolean) => void
}

const useProduct = create<Store>()(set => ({
  product: null,
  setProduct: product => set({product}),
  open: false,
  setOpen: open => set({open})
}))


export default useProduct
