import prisma from "../lib/prisma";

export async function getAccount(email: string) {
  const account = await prisma.account.findFirst({ where: { email }, include: { sites: true } });

  return account;
}

export async function getSite(siteId: string) {
  const page = await prisma.site.findFirst({ where: { id: siteId }, include: { pages: true } });

  return page;
}

export async function getAllPages(siteId: string, name: string) {
  const page = await prisma.page.findFirst({ where: { siteId, name } });

  return page;
}