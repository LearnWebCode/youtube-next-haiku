import jwt from "jsonwebtoken"
import { cookies } from "next/headers"

export async function getUserFromCookie() {
  const theCookie = cookies().get("ourhaikuapp")?.value
  if (theCookie) {
    try {
      const decoded = jwt.verify(theCookie, process.env.JWTSECRET)
      return decoded
    } catch (err) {
      return null
    }
  }
}
