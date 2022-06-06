
import type { NextApiRequest, NextApiResponse } from 'next'
import { getAccount } from '../../../api';

const GetAccount = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.query;
  const account = await getAccount(email as string);
  res.status(200).json({ account })
}

export default GetAccount;