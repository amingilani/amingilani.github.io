import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "images/take-action-pubg/pubg-helmet.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const ctaLink = `mailto:consultation-pubg@pta.gov.pk?bcc=thanks-for-the-template@gilani.me&subject=Please%20revert%20the%20unjusitifable%20PUBG%20ban&body=Dear%20PTA%0D%0A%0D%0AIt%20has%20come%20to%20my%20attention%20that%20you%20have%20temporarily%20suspended%20PUBG%20citing%20complaints%20that%20it%20is%20%22addictive%2C%20%5Ba%5D%20wastage%20of%20time%20and%20poses%20%5Ba%5D%20serious%20negative%20impact%20on%20physical%20and%20psychological%20health.%22%20I%20believe%20that%20this%20suspension%20is%20wholly%20unnecessary%2C%20capricious%2C%20and%20unjustifiable.%20I%20urge%20the%20PTA%20to%20revert%20this%20and%20to%20refrain%20from%20taking%20similar%20steps%20in%20the%20future.%0D%0A%0D%0AThe%20reasoning%20the%20authority%20has%20adopted%20is%20flawed%3A%0D%0A%0D%0A1.%20PUBG%20is%20not%20physically%20addictive%20and%20addictive%20products%20are%20not%20banned.%20When%20away%20from%20PUBG%2C%20a%20person%20does%20not%20exhibit%20physical%20withdrawal%20symptoms.%20Furthermore%2C%20even%20if%20PUBG%20were%20addictive%2C%20addictive%20products%2C%20such%20as%20those%20containing%20nicotine%20are%20not%20banned%20in%20Pakistan.%0D%0A2.%20Calling%20PUBG%20a%20waste%20of%20time%20is%20unwarranted.%20The%20idea%20that%20a%20form%20of%20entertainment%20is%20a%20%22wastage%20of%20time%22%20can%20apply%20to%20many%20similar%20items%20and%20activities%20such%20as%20television%2C%20sports%2C%20festivals%2C%20the%20circus%2C%20board%20games%2C%20cinema%2C%20film%2C%20dance%2C%20animals%2C%20magic%20shows%2C%20parades%2C%20firework%2C%20theatre%2C%20music%2C%20fiction%20books%2C%20every%20other%20game%20in%20work%2C%20and%20more.%0D%0A3.%20Violent%20video%20games%20do%20not%20adversely%20affect%20mental%20health.%20Ferguson%20and%20Olson%202014%20concluded%20that%20%22results%20did%20not%20support%20the%20hypothesis%20that%20children%20with%20elevated%20mental%20health%20symptoms%20constitute%20a%20'vulnerable'%20population%20for%20video%20game%20violence%20effects%22.%20In%20another%20paper%2C%20Ferguson%20et%20al.%202015%20further%20concluded%20that%20%22youth%20with%20prior%20mental%20health%20symptoms%20were%20no%20more%20influenced%20by%20violent%20games%22%20and%20%22parental%20restrictions%20on%20gaming%20were%20not%20associated%20with%20positive%20outcomes%22.%20Most%20importantly%2C%20in%20Allahverdipour%20et%20al.%202010%2C%20a%20study%20in%20an%20Islamic%20country%20found%20positive%20impacts%20on%20mental%20health%20of%20moderate%20gaming%2C%20and%20negative%20impacts%20of%20not%20gaming%20at%20all%E2%80%94which%20is%20the%20strategy%20PTA%20is%20imposing.%20Their%20conclusions%20were%20that%20%22both%20children%20and%20parents%20of%20non-game%20players%20should%20be%20updated%20about%20the%20positive%20impact%20of%20moderate%20video%20gaming%22.%0D%0A%0D%0A%0D%0ATherefore%2C%20I%20urge%20the%20PTA%20to%20immediately%20revert%20its%20suspension%20and%20ensure%20that%20no%20games%20are%20arbitrarily%20banned%20on%20an%20unspecified%20number%20of%20complaints%20in%20the%20future.%20I%20would%20also%20appreciate%20if%20the%20PTA%E2%80%99s%20bans%20and%20restrictions%20to%20citizen%E2%80%99s%20freedoms%20were%20based%20on%20factual%20data%20and%20sound%20reasoning%2C%20as%20is%20expected%20of%20a%20regulatory%20authority.%0D%0A%0D%0ACitations%3A%0D%0A%0D%0A1.%20Allahverdipour%2C%20Hamid%2C%20et%20al.%20%E2%80%9CCorrelates%20of%20Video%20Games%20Playing%20among%20Adolescents%20in%20an%20Islamic%20Country.%E2%80%9D%20BMC%20Public%20Health%2C%20vol.%2010%2C%20no.%201%2C%202010%2C%20doi%3A10.1186%2F1471-2458-10-286.%0D%0A2.%20Ferguson%2C%20Christopher%20J.%2C%20et%20al.%20%E2%80%9CDigital%20Poison%3F%20Three%20Studies%20Examining%20the%20Influence%20of%20Violent%20Video%20Games%20on%20Youth.%E2%80%9D%20Computers%20in%20Human%20Behavior%2C%20vol.%2050%2C%202015%2C%20pp.%20399%E2%80%93410%2C%20doi%3A10.1016%2Fj.chb.2015.04.021.%0D%0A3.%20Ferguson%2C%20Christopher%20J.%2C%20and%20Cheryl%20K.%20Olson.%20%E2%80%9CVideo%20Game%20Violence%20Use%20Among%20%E2%80%98Vulnerable%E2%80%99%20Populations%3A%20The%20Impact%20of%20Violent%20Games%20on%20Delinquency%20and%20Bullying%20Among%20Children%20with%20Clinically%20Elevated%20Depression%20or%20Attention%20Deficit%20Symptoms.%E2%80%9D%20Journal%20of%20Youth%20and%20Adolescence%2C%20vol.%2043%2C%20no.%201%2C%202014%2C%20pp.%20127%E2%80%9336%2C%20doi%3A10.1007%2Fs10964-013-9986-5.%0D%0A`

const cta = () => {
  return (
    <a
      href={ctaLink}
      className="button is-rounded is-primary"
    >
      <span className="icon">
        <i className="fas fa-at"></i>
      </span>
      <span>Email PTA to stop</span>
    </a>
  )
}

const IndexPage = ({ data }) => (
  <Layout
    noHeader="true"
    seoData={{
      title: "Click Here To Take Action Against PTA's PUBG Ban",
      description: 'PTA has banned PUBG based on baseless claims. But it isn\'t too late. Click here immediately to tell PTA how you feel',
      image: '/images/pubg/pubg-banner.jpg',
      ogImageWidth: '1200',
      ogImageHeight: '675',
      article: true,
    }}
  >
    <section className="hero is-warning is-medium">
      <div className="hero-body">
        <div className="container has-text-centered">
          <figure
            className="image is-128x128"
            style={{ display: 'inline-block' }}
          >
            <Img
              className="avatar"
              fluid={data.file.childImageSharp.fluid}
              alt="PUBG player helmet"
            />
          </figure>
          <h1 className="title">Save Pakistan's Games</h1>

          <h2 className="subtitle">
            <strong>
              PTA has banned PUBG for unwise reasons, take action to save our
              freedom<br />
              <span class="has-text-danger">#UNBANPUBG #InternetFreedom #DigitalRights</span>
            </strong>
          </h2>

          <h2 className="subtitle">
            <span className="icon">
              <i className="fas fa-gamepad fa-2x"></i>
            </span>
          </h2>
          <div className="subtitle">Click the button open a ready-to-send email</div>
          <div className="subtitle">{cta()}</div>
          <div className="subtitle">
            <a
            href="#what-happened">
              Or learn more
              <span className="icon has-text">
                <i className="fas fa-arrow-down"></i>
              </span>
            </a>
          </div>
          <div className="subtitle">Share:</div>
          <div class="subtitle columns">
            <div class="column is-narrow is-1 is-offset-5">
              <a
              target="_blank"
              rel="noopener noreferrer"
              href="whatsapp://send?text=Take action against PTA's capricious PUBG ban! https://amin.gilani.me/take-action-pubg-ban/" data-action="share/whatsapp/share">
                <span className="icon has-text">
                  <i className="fab fa-whatsapp fa-2x"></i>
                </span>
              </a>
            </div>
            <div class="column is-narrow is-1">
            <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/intent/tweet?text=Take%20action%20against%20PTA%27s%20capricious%20PUBG%20ban%21%20https%3A%2F%2Famin.gilani.me%2Ftake-action-pubg-ban%2F%20%23PUBG%20%23PUBGBAN%20%23UNBANPUBG%20%23unbanpubginpakistan%20%23NOBANPUBG%20via%20%40amingilani">
              <span className="icon has-text">
                <i className="fab fa-twitter fa-2x"></i>
              </span>
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="columns">
        <div className="column is-6 is-offset-3">
          <div className="content">
            <h2 id="what-happened">What Happened?</h2>
            <p>
              PTA has temporarily suspended PUBG citing concerns that it:
            </p>

            <ol>
              <li>
                "poses [a] serious negative impact on physical and
                psychological health".
              </li>
              <li>a "wastage of time"; and</li>
              <li>"is addictive",</li>
            </ol>

            <blockquote className="twitter-tweet">
              <p lang="en" dir="ltr">
                PTA has received numerous complaints against PUBG wherein it
                is stated that the game is addictive, wastage of time and
                poses serious negative impact on physical and psychological
                health of the children.{' '}
                <a href="https://t.co/GDJqTeuTaf">
                  pic.twitter.com/GDJqTeuTaf
                </a>
              </p>
              &mdash; PTA (@PTAofficialpk){' '}
              <a href="https://twitter.com/PTAofficialpk/status/1278324087459323905?ref_src=twsrc%5Etfw">
                July 1, 2020
              </a>
            </blockquote>{' '}
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charSet="utf-8"
            ></script>

            <div className="has-text-centered">{cta()}</div>

            <h2>These Concerns Are Not Valid</h2>

            <p>The reasons provided by the PTA are contrary to fact.</p>

            <h3>
              1. Violent video games do not adversely affect mental health
            </h3>
            <p>This has been studied and concluded multiple times:</p>
            <ul>
              <li>
                <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://doi.org/10.1007/s10964-013-9986-5">
                  Ferguson and Olson 2014
                </a>{' '}
                concluded that &quot;results did not support the hypothesis that
                children with elevated mental health symptoms constitute a
                'vulnerable' population for video game violence effects&quot;.
              </li>
              <li>
                In another paper,{' '}
                <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://doi.org/10.1016/j.chb.2015.04.021">
                  Ferguson et al. 2015
                </a>{' '}
                further concluded that &quot;youth with prior mental health
                symptoms were no more influenced by violent games&quot; and
                &quot;parental restrictions on gaming were not associated with
                positive outcomes&quot;.
              </li>
              <li>
                Most importantly, in{' '}
                <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://doi.org/10.1186/1471-2458-10-286">
                  Allahverdipour et al. 2010
                </a>
                , a study in an Islamic country found positive impacts on mental
                health of moderate gaming, and negative impacts of not gaming at
                all&mdash;which is the strategy PTA is imposing. Their
                conclusions were that &quot;both children and parents of
                non-game players should be updated about the positive impact of
                moderate video gaming&quot;.
              </li>
            </ul>
            <p>The position PTA has adopted is contrary to researched facts.</p>

            <h3>2. Calling PUBG a waste of time is unwarranted</h3>
            <p>
              The idea that a form of entertainment is a &quot;wastage of
              time&quot; can apply to many similar items and activities such as
              television, sports, festivals, the circus, board games, cinema,
              film, dance, animals, magic shows, parades, firework, theatre,
              music, fiction books, every other game in work, and more.
            </p>

            <h3>3. PUBG is not physically addictive</h3>
            <p>
              And addictive products are not banned. When away from PUBG, a
              person does not exhibit physical withdrawal symptoms. Furthermore, {}
              <em>even if PUBG were addictive</em>, addictive products&mdash;such as {}
              products containing nicotine&mdash;are not banned in Pakistan.
            </p>

            <div className="has-text-centered">{cta()}</div>

            <h2>Everyone Is Impacted</h2>
            <p>
              <strong>
                Even if you are not directly impacted by this ban,
              </strong> {}
              the reasons given are so vague and infactual that this will set a
              precendence for the PTA to ban something you care about in the future.
            </p>
            <div className="has-text-centered">{cta()}</div>

            <h2>What Happens Now?</h2>
            <p>
              <strong>
              It isn't too late yet!
              </strong> {}
              PTA is still seeking comments from the public on the matter. {}
              <strong><span className="has-text-danger">Take action now!</span></strong> {}
              Email the PTA at <a
              target="_blank"
              rel="noopener noreferrer"
              href={ctaLink}>consultation-pubg@pta.gov.pk</a>.
              Tap the button below to open a pre-filled email template explaining these
              reasons to the PTA.
            </p>
            <div className="has-text-centered">{cta()}</div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
