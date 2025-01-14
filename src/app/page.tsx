import Link from "next/link";
import Image from "next/image";

const mockUrl = [
  "https://r6fnk5r8y1.ufs.sh/f/lC752HMbdJZAgl7029pzNidXOGa9EBC0pyLQ1kleox8urVcF",
  "https://r6fnk5r8y1.ufs.sh/f/lC752HMbdJZA2XDWLSQVi2XuolNyPp5OFMQ7HtCJnD4evLIg",
  "https://r6fnk5r8y1.ufs.sh/f/lC752HMbdJZA0Ik5KwACEruAXSZ3o1Kschy6RpziaYMPmQB4",
  "https://r6fnk5r8y1.ufs.sh/f/lC752HMbdJZARXfXsrcbVp0uBFfrscGIjZ5TDx4l91h6MPmg",
  "https://r6fnk5r8y1.ufs.sh/f/lC752HMbdJZAx4orBbiANdIPK3gnakeDUW4lxj2Gp10uVOZC",
  "https://r6fnk5r8y1.ufs.sh/f/lC752HMbdJZA3G7ZD59WLTtUfAKSVCw2ymFug8EHIceYMirl",
];

const mockImage = mockUrl.map((url, index) => ({
  id: index + 1,
  url,
  title: `mock image ${index}`,
  description: `mock description ${index}`,
}));

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">t3 gallery</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {mockImage.map((image) => (
          <div key={image.id} className="relative aspect-square">
            <Image
              src={image.url}
              alt={image.title}
              width={500}
              height={500}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
