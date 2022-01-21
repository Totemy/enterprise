import { rest } from "msw";
import {apiUrl} from "@/settings.js"

export default [
    rest.get(apiUrl + ("products"), (req, res, ctx) => {
        return res(
            ctx.json([
                {
                    "id": 2,
                    "name": "Iphone 13 max",
                    "price": 1300,
                    "photoUrl": "dasjda"
                }
            ])
        )
    })
]