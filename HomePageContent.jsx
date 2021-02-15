import { useTranslation } from 'react-i18next';
import LinkButton from '../../design/components/LinkButton';
import Countdown from './Countdown';
import VolunteerBanner from './VolunteerBanner';
import { css } from '@emotion/react'
import Icon from '../../design/components/Icon';
import HousingIcon from './Icons/HousingIcon';
import EducationIcon from './Icons/EducationIcon';
import HealthcareIcon from './Icons/HealthcareIcon';
import GDPGrowthScatterPlot from './plots/GDPGrowthScatterPlot';
import TaxRevenueGDPBar from './plots/TaxRevenueGDPBar';
import RichHoardingWealth1 from './plots/RichHoardingWealth1';
import RichHoardingWealth2 from './plots/RichHoardingWealth2';
import TaxBurdenBar from './plots/TaxBurdenBar';


const HomePageContent = () => {
  const { t } = useTranslation();
  const iconStyle = css`
    font-size: .75em;
    font-weight: bold;
    position: absolute;
    top: 90px;
    left: 0px;
    text-transform: uppercase;
    text-align: center;
    width: 100%;
  `;

  return (
    <div>
      <div className='container fg-content'
>

        <div css={css`
          font-family: var(--title-font);
          margin-top: 90px;
          padding-bottom: 7px;
          font-weight: 700;
          font-size: 60px;
          line-height: 72px;
          letter-spacing: 0.05em;
          color: #2F4858;
          text-transform: uppercase;
        `}>
          {t('homepage_we_have')}
        </div>
        <div className="outer-2-col-grid">
          <Countdown />

          <div className="inner-3-row-grid">
            <div css={css`
              font-family: var(--title-font);
              font-weight: bold;
              font-size: 48px;
              line-height: 58px;
              letter-spacing: 0.05em;
              color: #2F4858;
              text-transform: uppercase;
            `}>
              {t('homepage_to_fund_our_state')}
            </div>

            <div css={css`
              display: flex;
              flex-direction: row;
              justify-content: space-evenly;
              margin: 30px 0px 90px 0px;;
            `}>
              <Icon size="small">
                <HousingIcon />
                <span css={iconStyle}>{t('housing_icon_label')}</span>
              </Icon>
              <Icon size="small">
                <HealthcareIcon />
                <span css={iconStyle}>{t('healthcare_icon_label')}</span>
              </Icon>
              <Icon size="small" >
                <EducationIcon />
                <span css={iconStyle}>{t('education_icon_label')}</span>
              </Icon>
            </div>

            <div css={css`
              display: flex;
              flex-direction: row;
              justify-content: flex-end;
            `}>
              <LinkButton href='/volunteer'>Volunteer</LinkButton>
            </div>
          </div>
        </div>

      <div id="explainer"
        css={css`
          margin-top: 58px;
          h1, h2, .learnMore { text-align: center; }
          h1, h2, p { max-width: 730px; margin-left: auto; margin-right: auto; }
          h1 { color: var(--red); font-size: 37px; }
          h2 { font-size: 25px; }
          p { font-size: 16px; margin:0 auto;}
          strong { color: var(--red); }
          .verticalLine {background: var(--red); width: 1px; height: 148px; margin:auto;}
          .learnMore {
            text-transform: uppercase;
            font-size: 13px;
            margin: 9px;
            font-weight: bold;
          }
          .downArrow {
            margin: 0 auto 110px;
            width: 0;
            height: 0;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-top: 17px solid var(--blue);
          }
        `}>
        <div className="learnMore"><a href="#explainer">learn more</a></div>
        <div className="downArrow"></div>
        <h2>It’s time to</h2>
        <h1>TAX THE RICH</h1>
        <div className='verticalLine'></div>
        <h2>New York is in a crisis.</h2>
        <p>Our state faces a catastrophic $60 billion budget shortfall over the next four years, and Governor Cuomo is already cutting funding for vital services like Medicaid, the MTA, and public schools. If this goes on, our economy will suffer permanent damage and working-class New Yorkers will pay the highest price.</p>
        <h2>But it doesn’t have to be.</h2>
        <h2>Our state has the wealth to <strong>weather this storm</strong> and <strong>build a stronger future</strong> for all.</h2>
        <h2>We have one of the world’s most dynamic economies.</h2>
        <h2>We can afford to <strong>significantly</strong> increase our state budget.</h2>
        <p>Governments in other industrialized democracies collect much more tax revenue, proportional to GDP, than New York State. In New York, a small increase in taxes on the wealthy to bring our tax structure more in line with that of a country like Canada would raise $70 billion. This would fund vital public services and pave a path for economic prosperity for all New Yorkers.</p>
        <h2>But the rich are <strong>hoarding</strong> our wealth.</h2>
        <p>Over the last 40 years, the top 1 percent have captured almost half of our economic growth. Their incomes have gone up, while everyone else’s have stagnated.</p>
        <p>PIE CHART</p>
        <p>Share of annual income growth in New York State</p>
        <p>Top 1%</p>
        <p>Bottom 99%</p>
        <p>Source: Economic Policy Institute</p>
        <h2>Meanwhile, the rich have the <strong>lowest</strong> tax burden of all.</h2>
        <p>BAR GRAPH</p>
        <p>New York’s income tax system is regressive. Adding up all taxes paid, those who earn the most pay the smallest share of their income in taxes. People making over $780,000 have the lowest tax burden of all.</p>
        <h2>We can afford to <strong>significantly</strong> increase our state budget.</h2>

        <div css={css`
          width: 500px;
          height: 300px;
          .label-text {
            font-size: .6em;
          }
        `}>
          <GDPGrowthScatterPlot />
        </div>

        <div css={css`
          width: 500px;
          height: 300px;
          .label-text {
            font-size: .6em;
          }
        `}>
          <TaxRevenueGDPBar />
        </div>

        <div css={css`
          width: 500px;
          height: 300px;
        `}>
          <RichHoardingWealth1 />
        </div>

        <div css={css`
          width: 500px;
          height: 300px;
        `}>
          <RichHoardingWealth2 />
        </div>


        <TaxBurdenBar width={600} height={300} />


      </div> { /* end of explainer */ }

      <div css={{ marginTop: 'var(--space-lg)' }}>
        <VolunteerBanner />
      </div>
      </div> { /* end of fg-content */  }
    </div>
  );
};


export default HomePageContent;
