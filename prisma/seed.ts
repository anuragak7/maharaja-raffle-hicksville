import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting Hicksville database seed...')

  // Sample Hicksville participants (you can replace with real data)
  const hicksvilleEntries = [
    { firstName: 'AMIT', lastName: 'SHARMA', phone: '5161234567' },
    { firstName: 'PRIYA', lastName: 'PATEL', phone: '5162345678' },
    { firstName: 'RAJESH', lastName: 'KUMAR', phone: '5163456789' },
    { firstName: 'SUNITA', lastName: 'SINGH', phone: '5164567890' },
    { firstName: 'VIJAY', lastName: 'GUPTA', phone: '5165678901' },
    { firstName: 'NEHA', lastName: 'AGARWAL', phone: '5166789012' },
    { firstName: 'ROHIT', lastName: 'VERMA', phone: '5167890123' },
    { firstName: 'KAVITA', lastName: 'JOSHI', phone: '5168901234' },
    { firstName: 'DEEPAK', lastName: 'MEHTA', phone: '5169012345' },
    { firstName: 'SONIA', lastName: 'SHAH', phone: '5160123456' },
    { firstName: 'RAMESH', lastName: 'ARORA', phone: '5161234560' },
    { firstName: 'POOJA', lastName: 'MALHOTRA', phone: '5162345601' },
    { firstName: 'SURESH', lastName: 'CHOPRA', phone: '5163456012' },
    { firstName: 'REETA', lastName: 'BHATT', phone: '5164560123' },
    { firstName: 'AJAY', lastName: 'SOOD', phone: '5165601234' },
    { firstName: 'MEERA', lastName: 'KAPOOR', phone: '5166012345' },
    { firstName: 'VINOD', lastName: 'SETHI', phone: '5160123457' },
    { firstName: 'GEETA', lastName: 'RANA', phone: '5161234578' },
    { firstName: 'MANOJ', lastName: 'BHATIA', phone: '5162345789' },
    { firstName: 'SHILPA', lastName: 'KHANNA', phone: '5163457890' },
    { firstName: 'RAVI', lastName: 'TIWARI', phone: '5164578901' },
    { firstName: 'ANITA', lastName: 'BAJAJ', phone: '5165789012' },
    { firstName: 'SANDEEP', lastName: 'GOEL', phone: '5166890123' },
    { firstName: 'RITU', lastName: 'BANSAL', phone: '5167901234' },
    { firstName: 'ASHOK', lastName: 'SINHA', phone: '5168012345' }
  ]

  // Delete existing Hicksville entries
  await prisma.entry.deleteMany({
    where: { store: 'hicksville' }
  })

  // Add Hicksville entries
  for (const entry of hicksvilleEntries) {
    await prisma.entry.create({
      data: {
        ...entry,
        store: 'hicksville'
      }
    })
  }

  console.log(`✅ Seed complete! Total Hicksville entries: ${hicksvilleEntries.length}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
