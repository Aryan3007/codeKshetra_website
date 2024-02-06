/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
const Laws = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full px-12">
      <h1 className="text-center text-5xl translate-y-12 text-white">
        Regulation Of Dark Patterns
      </h1>
      <div className="h-96 w-[80%] lawimg bg-red-400"></div>
      <div className="w-[80%] h-full flex flex-col">
        <h1 className="text-3xl my-4 font-semibold ">
          Restrictions on the use of dark patterns in the EU and USA
        </h1>
        <p className="my-4">
          The EU Digital Services Act, 2022 (‘DSA’), prohibits ‘providers of
          online platforms’ from designing, organising, or operating their
          online interfaces ‘in a way that deceives or manipulates the
          recipients of their service or in a way that otherwise materially
          distorts or impairs the ability of the recipients of their service to
          make free and informed decisions.’[3] Examples of dark patterns under
          the DSA include: (a) making certain choices more prominent when
          seeking a decision from a service recipient; and (b) making the
          procedure for the termination of a service more difficult than the
          procedure for acceptance of said service[4].
        </p>{" "}
        <p className="my-4">
          Similarly, the California Consumer Privacy Act (‘CCPA’) (effective
          from 1 January 2020), read with the California Consumer Privacy
          Regulations (‘CCPR’) (effective from 29 March 2023) (collectively
          ‘California Consumer Privacy Law’), identifies 'dark patterns' as a
          user interface designed/ manipulated with the substantial effect of
          subverting/ impairing user autonomy/ decision-making/ choice. The CCPA
          provides that consent obtained by use of dark patterns will not be
          considered valid.
        </p>{" "}
        <p className="my-4">
          In March 2023, the U.S Federal Trade Commission imposed a penalty of
          $245,000,000 (two hundred forty-five million dollars) on Epic Games
          Inc. (the creators of the popular online game ‘Fortnite’)[5] pursuant
          to a complaint alleging violation of the U.S Federal Trade Commission
          Act, 1914 by Epic Games Inc., on the grounds of its use of dark
          patterns to deter users from cancelling/ requesting refunds for
          certain in-game charges[6].
        </p>
        <h1 className="text-3xl my-4 font-semibold ">
          Restrictions on the use of dark patterns in India
        </h1>
        <p className="my-4">
          In India, the Department of Consumer Affairs (under the Ministry of
          Consumer Affairs, Food and Public Distribution) recently proposed the
          draft ‘Guidelines for Prevention and Regulation of Dark Patterns,
          2023’, which aimed to prevent the use of dark patterns by platforms,
          advertisers, and sellers. Subsequently, the final version of the
          guidelines were notified by the Central Consumer Protection Authority
          on 30 November 2023(‘Guidelines’)
        </p>
        <p className="my-4">
          Under the Guidelines, the term ‘dark patterns’ has been defined to
          mean practices or deceptive design techniques which: (a) use UI/UX
          interactions on a platform; (b) are designed to mislead users into
          committing actions they did not intend to carry out by subverting/
          impairing their autonomy as consumers; and (c) amount to misleading
          advertisements, unfair trade practices, or violation of consumer
          rights.
        </p>
        <p className="my-4">
          In addition to the definition, the Guidelines also set out a list of
          illustrative examples of dark patterns in Annexure A. These include
          dark patterns which entail: (a) creating a false urgency (creating or
          implying a sense of urgency or scarcity, including by depicting false
          popularity of a product or service); (b) confirm shaming (instilling a
          sense of shame / guilt/ fear in a user’s mind through the use of a
          phrase/ video/ audio or other means); (c) interface interference (a
          design element highlights certain information and obscures other
          relevant information, with the aim to misdirect a user); (d) disguised
          advertisements (the practice of masking advertisements as user
          generated content or news articles such that the advertisements blend
          in with the rest of the user interface in order to trick consumers
          into clicking on them); (e) forced action (forcing a user to take an
          action that would require the user to buy additional goods/ sign up
          for an unrelated service or share personal information in order to
          buy/ subscribe to a product/ service intended by the user such as
          requiring a user to share details of their contacts/ social networks
          or making it difficult for consumers to alter/ understand their
          privacy settings); (f) SaaS billing (generating and collecting
          payments from consumers on a recurring basis as surreptitiously as
          possible); and (g) rogue malware (using a ransomware/ scareware to
          mislead or trick users into believing there is a virus on their
          computer with the aim of convincing them to pay for a fake malware
          removal tool which ends up installing malware on their computer).
        </p>
        <h1  className="text-3xl my-4 font-semibold ">‘Designed to Mislead’: The Relevance of Intent</h1>
        <p className="my-4">Some laws which regulate dark patterns in other jurisdictions (such as the DSA and the California Consumer Privacy Law) have recognised that dark patterns may adversely impact consumer choices regardless of whether they were designed with the intention to mislead consumers[7]. In fact, under the CCPR, the intent behind designing an interface is not determinative in deciding whether such interface amounts to a dark pattern (though it is a factor to be considered). For example, a user interface may be considered a dark pattern (regardless of intent) if a business is aware that such user interface has the effect of subverting/ impairing a user’s choice but does not remedy the same. Similarly, if a business deliberately ignores the effects of its user interface, this will also lead to a presumption of the existence of a dark pattern.
</p>

<p className="my-4">In India, however, one of the necessary ingredients to establish that a UI/UX utilises a dark pattern (and is therefore prohibited) is that it was ‘designed to mislead’.
</p>

<p className="my-4">While this position is different from the DSA and CCPA/CCPR, the requirement to prove intention behind the design might be useful to ensure that an intelligent analysis is carried out before a particular UI/UX design choice is considered a ‘dark pattern’. On the other hand, it may be somewhat practically difficult to establish in each case that the intention behind the design was to mislead the user. It remains to be seen how the Central Consumer Protection Authority interprets this.</p>
      </div>
    </div>
  );
};

export default Laws;
