import { getAccount } from 'api';
import type { NextApiRequest, NextApiResponse } from 'next'

const GetAccount = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.query;
  const account = await getAccount(email as string);
  res.status(200).json({ account })
}

export default GetAccount;