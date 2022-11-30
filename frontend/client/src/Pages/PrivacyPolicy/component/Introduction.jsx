import React from "react";
import { List } from "../style/Privacy.styled";

const Introduction = () => {
  return (
    <section>
      <h2 style={{ marginBottom: "28px" }}>Introduction</h2>
      <div>
        <p>
          Hello!👋 We&lsquo;re StreetRates. We really value our users and by
          extension, we value your trust and privacy. That&lsquo;s why
          we&lsquo;ve developed this privacy policy; to be transparent about the
          personal data we collect, how it&lsquo;s used, who it&lsquo;s shared
          with and what choices our users have over their data. This privacy
          policy applies to the personal data that Shares processes in
          connection with the platform and applications, webServices, products
          and services that are referenced in this policy (collectively, the
          "Services").
        </p>
        <div>
          <p>Before we dive in, we want to clarify a few points:</p>
          <List>
            <li>
              Sorry kids! Our services aren&lsquo;t intended for children and we
              don&lsquo;t knowingly collect data relating to children.
            </li>
            <li>
              Stay informed! If we provide you with another privacy policy
              relating to specific processing, you should read it alongside this
              one.
            </li>
            <li>
              Legalese alert! This policy isn&lsquo;t much use if you
              can&lsquo;t understand it. That&lsquo;s why we&lsquo;ve put
              together a glossary to explain some of the legal terms used in it.
              You can find it at the end of this policy.
            </li>
          </List>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
