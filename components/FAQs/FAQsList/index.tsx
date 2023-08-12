"use client";
//== Modules
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//== Styles
import styles from './faqsList.module.scss';

interface FAQsListProps { }

const FAQsList: React.FC<FAQsListProps> = () => {
  return (
    <>
      <Container maxWidth="xl" className={styles.faqs}>
        <div className={styles.heading}>
          <h2>
            Here Are The Most Questions and Answers for Our Company
          </h2>

        </div>
        <Grid container spacing={3}>
          <Grid item sm={6} xs={12}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h5>What services does your Software Solution Company offer?</h5>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  Our company provides a comprehensive range of services, including: Web Design, Web Development, Mobile Application Design & Development, SEO (Search Engine Optimization), Game Development, Education Software, Booking Systems, Real Estate Systems, CRM (Customer Relationship Management), ERP (Enterprise Resource Planning), LMS (Learning Management System), CMS (Content Management System), E-Commerce Solutions And much more!
                </p>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h5>What types of websites can your Web Design services cater to?</h5>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  Our Web Design services cover a wide spectrum, including but not limited to: Corporate Websites, E-Commerce Websites, Personal Portfolios, Blogging Platforms, Non-profit Websites, Education Portals, Entertainment Websites And many others!
                </p>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h5>
                  Can you develop custom mobile applications for both Android and iOS platforms?
                </h5>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  Absolutely! We are experienced in developing custom mobile applications for both Android and iOS platforms, ensuring a seamless user experience on both systems.
                </p>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h5>How does your SEO service help businesses improve their online presence?</h5>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  Our SEO experts employ various strategies such as keyword optimization, content improvement, link building, and site performance enhancement to boost search engine rankings and increase organic traffic to our clients' websites.
                </p>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h5>What kind of games can your Game Development team create?</h5>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  Our talented Game Development team can create a wide range of games, including: Casual Games, Puzzle Games, Adventure Games, Action Games, RPGs (Role-Playing Games), Simulation Games, Multiplayer Games And more!
                </p>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h5>
                  Can you develop custom Education Software tailored to specific educational institutions?
                </h5>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  Yes, we can develop custom Education Software that meets the unique needs and requirements of educational institutions, whether it's for schools, universities, or online learning platforms.
                </p>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h5>
                  How do your Booking Systems facilitate businesses in managing appointments and reservations?
                </h5>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  Our Booking Systems streamline the appointment and reservation process, allowing businesses to manage schedules, accept bookings online, send reminders, and even process payments, thus optimizing their operations and enhancing customer convenience.								</p>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h5>
                  What features are included in your Real Estate Systems to assist real estate agencies and agents?
                </h5>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  Our Real Estate Systems come equipped with features like property listings, advanced search options, interactive maps, virtual tours, client databases, and lead management tools, ensuring efficient property marketing and sales management.
                </p>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h5>
                  How can your CRM system benefit businesses in managing customer relationships?
                </h5>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  Our CRM system enables businesses to centralize customer data, track interactions, manage leads, automate tasks, and analyze customer behavior, leading to improved customer satisfaction and more effective sales and marketing efforts.
                </p>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h5>
                  What functionalities does your ERP system provide to help businesses streamline their operations?
                </h5>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  Our ERP system integrates various business processes, such as finance, inventory management, human resources, sales, and procurement, into a single unified platform, enabling businesses to enhance efficiency and decision-making.
                </p>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h5>
                  What makes your LMS stand out for educational institutions and corporate training?
                </h5>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  Our Learning Management System offers a user-friendly interface, customizable course creation, progress tracking, assessment tools, and reporting features, empowering educational institutions and corporations to deliver effective and engaging online learning experiences.
                </p>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h5>
                  Is your CMS easy to use for managing website content, even for non-technical users?
                </h5>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  Yes, our Content Management System is designed with user-friendliness in mind, allowing non-technical users to easily create, edit, and update website content without the need for extensive technical knowledge.
                </p>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h5>
                  How can your E-Commerce Solutions help businesses establish and grow their online stores?
                </h5>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  Our E-Commerce Solutions offer a range of features such as product catalogs, secure payment gateways, order management, inventory tracking, and analytics, providing businesses with a robust platform to sell their products and services online successfully.
                </p>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h5>
                  Do you offer other specialized services apart from the ones mentioned?
                </h5>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  Absolutely! In addition to the services mentioned, we also offer: Custom Software Development, UI/UX Design, Cloud Computing Solutions, Data Analytics and Business Intelligence, IT Consultancy Services And much more.
                </p>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            <p>
              Feel free to use these questions and answers to engage with our construction company and find the one that best suits your needs.
            </p>
          </Grid>

        </Grid>
      </Container>
    </>
  );
}

export default FAQsList;