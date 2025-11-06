export default function LotteryPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold text-center mb-6">
        লটারি আয়োজনের পক্ষপাত
      </h1>

      <p className="mb-4">
        ১. সেকশন বা গ্রুপ পরিবর্তনের ক্ষেত্রে ছাত্রছাত্রীদের মধ্যে লটারি আয়োজন
        অত্যন্ত প্রয়োজনীয় বলে মনে করা হয়েছে...
      </p>
      <p className="mb-4">২. অভিভাবকের নিয়মিত বিদ্যালয়ে যাতায়াত বাবদ...</p>
      <p className="mb-8">৩. শাখাবিন্যাস অংশের বিদ্যালয়ের অভিভাবক...</p>

      <h2 className="text-2xl font-bold mb-4">লটারি আয়োজনের নিয়ম:</h2>

      <p className="mb-4">
        যে ছাত্রছাত্রীরা ম্যানুয়ালি যে সেকশন/ গ্রুপে রয়েছে...
      </p>
      <p className="mb-4">১. লটারি করার মাসখানেক পূর্বে অভিভাবক...</p>
      <p className="mb-4">২. যদি কোন সমস্যার কারণে ছাত্র ছাত্রীদের...</p>
      <p className="mb-4">
        ৩. এক অভিভাবকের মধ্যে যাদের দুই বা ততোধিক সন্তান...
      </p>
      <p className="mb-4">৪. যেসব ছাত্রছাত্রী সাধারন মানসিকতায় অসুস্থ...</p>
      <p className="mb-8">৫. লটারির ফলে নির্ধারিত সেকশন...</p>

      <h2 className="text-2xl font-bold mb-4">লটারি গ্রুপ</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="border p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-2">১ম গ্রুপ</h3>
          <ul className="space-y-1 text-sm">
            <li>১২ বিজ্ঞান ছাত্রছাত্রী</li>
            <li>মানবিকের ছাত্রছাত্রী</li>
            <li>ব্যবসায় শিক্ষা ছাত্রছাত্রী</li>
          </ul>
        </div>

        <div className="border p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-2">২য় গ্রুপ</h3>
          <ul className="space-y-1 text-sm">
            <li>১২ বিজ্ঞান ছাত্রছাত্রী</li>
            <li>মানবিকের ছাত্রছাত্রী</li>
            <li>ব্যবসায় শিক্ষা ছাত্রছাত্রী</li>
          </ul>
        </div>

        <div className="border p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-2">৩য় গ্রুপ</h3>
          <ul className="space-y-1 text-sm">
            <li>১২ বিজ্ঞান ছাত্রছাত্রী</li>
            <li>মানবিকের ছাত্রছাত্রী</li>
            <li>ব্যবসায় শিক্ষা ছাত্রছাত্রী</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-center">লটারি অনুষ্ঠান</h2>

      <div className="text-center mb-8">
        <p>ক্লাস: এগারো শ্রেণির গ্রুপ নির্বাচন</p>
        <p>সিনিয়র শিফট গ্রুপ</p>
        <p>তারিখ: ১২ মার্চ</p>
      </div>

      <h3 className="text-xl font-bold mb-2">লটারির নিয়ম</h3>
      <ul className="list-disc pl-6 space-y-2 text-sm">
        <li>সকলের নাম ধার থেকে ক্রমানুসারে তোলা হবে।</li>
        <li>১২ নাম তোলা শেষ হলে পরবর্তী গ্রুপ নির্বাচন শুরু হবে।</li>
        <li>যে নাম উঠবে তার অনুসারে সেকশন পরিবর্তন কার্যকর হবে।</li>
        <li>যদি কোন ছাত্রছাত্রী উপস্থিত না থাকে সেক্ষেত্রে...</li>
      </ul>
    </div>
  );
}
