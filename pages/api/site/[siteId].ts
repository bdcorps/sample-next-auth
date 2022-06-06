
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSite } from '../../../api';

const GetSite = async (req: NextApiRequest, res: NextApiResponse) => {
  const { siteId } = req.query;
  const site = await getSite(siteId as string);
  res.status(200).json({ site })
}

export default GetSite;