import FAQAccordian from "./FAQAccordian";

const faqData = [
  {
    question: "What is the difference between Soundscapes and Scenarios?",
    answer: (
      <div className="text-[#bfbfbf] text-[22px] leading-[28px]">
        <p>
          The Endel app has two main forms of audio content — Soundscapes and
          Scenarios. Soundscapes are endlessly generated on the device following
          your local inputs — weather, time of day, cadence of your walks, and
          heart rate (if you’re wearing your Apple Watch), and others.
          <span className="text-white underline ml-1">
            Learn more about the inputs.
          </span>
        </p>
        <p className="mt-4">
          Scenarios are sound sessions with predefined logic (initial, middle,
          and end phases are defined and pre-generated for the timer you set).
          They are designed to be used for a particular task or life occasion in
          a timed session.
        </p>
      </div>
    ),
  },
  {
    question: "Is Endel sound tuned to 432kHz?",
    answer: (
      <div className="text-[#bfbfbf] text-[22px] leading-[28px]">
        <p>
          The Endel&apos;s sound is tuned to 440 hertz. It&apos;s the so-called
          natural order, where the relationships between the intervals are as
          simple for the brain to process as possible. According to research, it
          helps reduce the cognitive load in perceiving musical information.
        </p>
      </div>
    ),
  },
  {
    question: "Does Endel use binaural beats?",
    answer: (
      <div className="text-[#bfbfbf] text-[22px] leading-[28px]">
        <p>
          There is a Binaural Beats Scenario in the app. The other sounds don’t
          use this technology. Binaural waves at the physical level work
          exclusively in stereo headphones, make sure you wear them when you use
          the Binaural Beats Scenario.
        </p>
      </div>
    ),
  },
  {
    question: "I need help with Endel. How can I get it?",
    answer: (
      <div className="text-[#bfbfbf] text-[22px] leading-[28px]">
        <p>
          If you have any issues with the Endel app function or with your
          subscription or have any questions about Endel, you can contact our
          support via a{" "}
          <span className="text-white underline ml-1">form in the app</span> or
          by reaching out to us:{" "}
          <span className="text-white underline ml-1">ask@endel.io</span>.
        </p>
      </div>
    ),
  },
  {
    question: "Why do I need to buy a subscription for Endel?",
    answer: (
      <div className="text-[#bfbfbf] text-[22px] leading-[28px]">
        <p>
          Paid subscription model is a necessary format for us to keep
          maintaining and developing Endel continually. The subscription price
          includes our work on updates — not only do we fix bugs and improve our
          products’ technical performance gradually, but also consistently add
          new sounds, features, and user experience improvements, based on user
          research and with the best interest of the Endel community in mind.
        </p>
      </div>
    ),
  },
  {
    question: "Do I need to follow the circadian and ultradian cycles?",
    answer: (
      <div className="text-[#bfbfbf] text-[22px] leading-[28px]">
        <p>
          The circadian and ultradian cycles are scientifically backed theories
          of daily energy levels. In an ideal situation, it would be advisable
          to follow the rhythms: rest on low phases, and be active on high
          phases of the cycles. But it is hard to accommodate in modern everyday
          life. Which is why the Endel app can also help you mitigate the
          negative influence of the cycles with sound.
        </p>
        <p className="mt-4">
          For example, when you play Focus during a low period of the circadian
          cycle, you’ll notice that the sound is still stimulating for
          concentration, but not as intense and driving as during the highs, to
          help you ease into the work you need to do at that moment, instead of
          pushing you too hard.
        </p>
      </div>
    ),
  },
  {
    question: "How effective is Endel?",
    answer: (
      <div className="text-[#bfbfbf] text-[22px] leading-[28px]">
        <p>
          Millions of happy users and their feedback in endless reviews and
          messages attest to the efficiency of Endel’s sound. However, sound
          perception is a very subjective matter, and we fully admit that Endel
          may not work for everyone in the same way. We base all of our
          Soundscapes and Scenarios design on scientific research, and there is
          peer-reviewed research that backs the efficiency of Endel’s sound
          compared to playlists and silence. For more information on the science
          behind Endel’s sound,
          <span className="text-white underline ml-1">go here</span>.
        </p>
      </div>
    ),
  },
  {
    question: "Is Endel scientifically proven?",
    answer: (
      <div className="text-[#bfbfbf] text-[22px] leading-[28px]">
        <p>
        All Endel Soundscapes and Scenarios are based on scientific research around sound, neuroscience and Circadian science, and there is a peer-reviewed study that backs the efficiency of Endel’s sound compared to playlists and silence. For more information on the science behind Endel’s sound,
          <span className="text-white underline ml-1">go here</span>.
        </p>
      </div>
    ),
  },
];

const FAQSec = () => {
  return (
    <div className="pt-[128px] mt-[90px]">
      <h1 className="mx-auto   block mb-[48px] text-[44px] font-medium text-center">
        FAQ
      </h1>
      <div className="w-[1152px] h-full mx-auto flex flex-col gap-4">
        {faqData.map((faq, index) => (
          <FAQAccordian
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQSec;
