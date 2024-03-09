import { getServerSession } from "next-auth";

import { authOptions } from "../libs/auth";

export default async function getSession() {
  return getServerSession(authOptions);
}
