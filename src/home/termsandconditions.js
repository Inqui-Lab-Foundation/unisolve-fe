import './home.scss';

import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
} from 'reactstrap';


import { Link } from 'react-router-dom';
import LanguageSelectorComp from '../components/LanguageSelectorComp';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { slide as Menu } from 'react-burger-menu';


const Termsandconditions = () => {
    const { t } = useTranslation();
  

    
    return (
        <div className="home-main">
            {/* Mobile menu */}
            <Menu right className="landing-menu">
                <Link className="menu-item" to="/login">
                    Login
                </Link>

                <Link className="menu-item" to="/register">
                    Sign up now
                </Link>
            </Menu>
            <section className="header1 mb-100">
                <div className="home-banner">
                    <Container>
                        <Row className="justify-content-between  pt-5">
                            <Col className="my-auto">
                                <h2 className="logo">
                                    <Link className="" exact="true" to="/">
                                        Unisolve
                                    </Link>
                                </h2>
                            </Col>
                            <Col className="text-right multi-actions">
                                

                                <LanguageSelectorComp />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <h1 className='w-100 text-center'>TERMS & CONDITIONS</h1>
                                <Card className="aside  mb-5 p-4 bg-transparent">
                                    <CardBody>
                                        <p>
                                        This Terms of Use Agreement 
                                        (&quot;Agreement&quot;) is an agreement between you (“you” or “User”) and School Innovation Program Partners (defined below, referred to as &quot;SIPP”, &quot;us,&quot; &quot;we,&quot; or &quot;our&quot;), which govern your use of the website: www.unisolve.org (&quot;Site&quot;). By using or accessing our Site or downloading materials from the Site or availing yourself of the School Innovation Program materials and services (defined below, “SIP materials and services”)  in any manner, you agree to have read, understood and to be legally bound by this Agreement. The Agreement includes all the schedules or additional policies attached hereunder.
                                        </p>
                                        <h5>Definitions</h5>
                                        <ol>
                                            <li>School Innovation Program Partners (“SIPP”) means the association of key partners conducting the School Innovation Program Program 2022 (“ SIP”) and includes Inqui-Lab Foundation, Government Partners, Implementation Partners  and UNICEF.</li>
                                            <li>School Innovation Program material and services (“SIP material and services”) means access to learning videos, design supplements, product and services, other content, visual interfaces, multimedia content including but not limited to musical works and sound recordings,  features, information, graphics, design, compilation, computer code, software, products, and all other elements of the Site provided by Inqui-Lab Foundation.</li>
                                        </ol>
                                        <h3>1. Acceptance of Agreement upon Updation</h3>
                                        <p>We may revise or otherwise change or update this Agreement . Please read carefully the terms of use and all other rules and guidelines that we may communicate to you from time to time, including the additional policies and/or attached annexures.</p>
                                        <p>SIPP reserves the right to update or modify the terms of this Agreement  at any time without prior notice, and such changes will be effective immediately upon posting through the Site. </p>
                                        <p>We encourage you to periodically review this Agreement to see if there have been any changes that may affect you. If you do not agree to this Agreement as modified, then you must terminate your use of the Site and SIP materials and services. Your continued use of the Site and SIP materials and services will signify your continued agreement to this Agreement as it may be revised from time to time.</p>
                                        <h3>2. Authorized Use</h3>
                                        <ol>
                                            <li><p>The User may access and use the Site and SIP material and services as set forth in this Agreement consistent with the intended features of the program, provided that i. the same is used solely for noncommercial or educational purposes and ii. you do not engage in any of the prohibited uses described hereunder.</p>
                                           
                                            </li>
                                            <li><p>While using the Site and SIP material and services, you are required to comply with all applicable statutes, orders, regulations, rules, and other laws. You may not use the Site for any fraudulent or unlawful purpose, and you may not take any action to interfere with a Site or any other user&#39;s use of a Site. You may not and you expressly agree that you will not, including but not limited to, do any of the following, which violate this Agreement:
                                            </p><p>2.1 Post, upload, share, transmit, distribute, facilitate distribution of or otherwise make available to or through the Site any unlawful, infringing, harmful, harassing, defamatory, threatening, intimidating, fraudulent, tortious, vulgar, racial or ethnic slurs or otherwise objectionable material of any kind,  unauthorized or unsolicited advertising and/or marketing, by way of example but not of limitation, including  CAN-SPAM, junk mail, spam, chain letters or pyramid schemes or any other form of solicitation. 
                                            </p><p>2.2 Reproduce, duplicate or copy any portion of the Site, except as authorized by this Agreement;
                                            </p><p>2.3 Impersonate any person or entity, falsely state or otherwise misrepresent your affiliation with any person or entity in connection with the Site, or express or imply that we endorse any statement you make or access another user’s account without that user’s permission. </p><p>2.4 Violate or attempt to violate the security of the Site.</p><p>2.5 Interfere with or disrupt the Site, networks or servers connected to the Site, or violate the regulations, policies or procedures of such networks or servers;
 
                                            </p><p>2.6 Remove, circumvent, disable, damage or otherwise interfere with any security-related features of the Site and/or SIP materials and services, features that prevent or restrict the use or copying of any part of the same, or features that enforce limitations on the use of the Site and/or SIP materials and services or any content therein.</p><p>2.7 Disseminate on the Site any viruses, worms, cancel bots, spyware, adware or other malicious computer code, file or program that is harmful, invasive or may or is intended to damage or hijack the operation of, or monitor the use of, any hardware, software or equipment.</p><p>2.8 Use any data mining, bots, spiders, automated tools or similar data gathering and extraction methods, directly or indirectly, on the Site or to collect any information from the Site or any other user of the Site.</p><p>2.9 Assist or permit any persons in violating this Agreement or applicable statutes, orders, regulations, rules, and other laws governing the use of websites.</p></li>
                                        </ol>
                                        <h3>
                                            3. Intellectual Property Rights
                                        </h3>
                                        <p>All content (“Content”), available through the Site is owned by SIPP . Except as set forth herein or otherwise agreed in writing by the SIPP or other rights owner(s), to sell, license, publish, or otherwise use of any Content available on the Site is strictly prohibited.
                                        </p><p>The Site and  SIP materials and services are the valuable proprietary and intellectual property of its licensors ie., SIPP, including but without limitation, all right, title, interest, moral rights, copyrights, trademarks, patents and any other Intellectual Property thereto.
                                        </p><p>You may use the Site and SIP materials and services from the Site explicitly made available by the  SIPP for public use, provided that you (a) keep intact all copyright and other proprietary notices; (b) use appropriate attribution where feasible (e.g. &quot;Source: School Innovation Program Program 2022, unisolve.org) (c) make no modifications to the SIP materials and services; (d) do not make any additional representations or warranties relating to SIP materials and services on behalf of the SIPP; and (e) do not use the SIP materials and services in any way that the SIPP deems inappropriate or inadvisable in its sole discretion.</p><p>Any rights not expressly granted herein are reserved.
                                        </p>
                                        <h3>IV.  User Submitted Information</h3>
                                        <ol>
                                            <li>You are responsible for any Content you transmit through our Site. You agree, represent and warrant that any Content you transmit through our Site or to us is truthful, accurate, not misleading and offered in good faith, and that you have the right to transmit such Content. You shall not upload, post or otherwise make available on or through the Site any Content protected by copyright, trademark or other proprietary right of any third party without the express written permission of the owner of such right(s) or the authority to do so. You shall be solely liable for any damages resulting from any infringement of copyright, trademark or other proprietary rights, or any other harm resulting from such a submission.</li>
                                            <li>SIP makes no representations that it will publish or make available on the Site and/or SIP materials and services any User Submissions, and reserves the right, in its sole discretion, to refuse to allow any User Submissions, or to remove any User Submission at any time with or without notice.</li>
                                            <li>By submitting Content, other than personally identifiable information, you grant to the SIPP (or warrant that the owner of such Content has expressly granted to the SIPP) a royalty-free, perpetual, irrevocable and unrestricted right and license (a) to use, reproduce, display, modify, adapt, publish, translate, transmit, distribute or otherwise make available to others such Content (in whole or in part and for any purpose) worldwide and/or to incorporate it in other works in any form, media or technology now known or hereafter developed; (b) to exercise all copyright, trademark, publicity, privacy and other proprietary rights with regard to such Content; and (c) to use your name, likeness and/or other biographical information in any and all media and/or communications.  You also agree that the SIPP is free to use any ideas, concepts, know-how or techniques that you send to us for any purpose.</li>
                                            <li>In case you want to report abuse with respect to User Submitted Information, please write to <a href="sic@inqui-lab.org" target="_black">info@inqui-lab.org.</a></li>
    
                                        </ol>
                                        <h3>V. Changes to the Site </h3>
                                        <p>We may make improvements and/or changes to the Site, add or remove features, or terminate the Site at any time without notice. We (a) reserve the right (but have no obligation) to change the Content or other offerings on the Site, at any time without any notice or liability to you or any other person; and (b) do not warrant that information on the Site is accurate, complete, reliable, current or error-free. 
                                        </p>
                                        <h3>VI. Third-Party Content</h3>
                                        <p>Any information, statements, opinions or other Content provided by third parties and made available on our Site are those of the respective author(s) and not the SIPP.  We do not guarantee the validity, accuracy, truthfulness, completeness, reliability or usefulness of any information, statement, opinion or other Content on our Site other than from an authorized SIPP representative acting in his or her official capacity. </p>
                                        <h3>VII. Links to Third-Party Websites</h3>
                                        <p>We may provide on the Site, solely as a convenience to Users, links to websites operated by third parties. If you use these links, you will leave our Site. If you decide to visit any linked website, you do so at your own risk and it is your responsibility to take all the necessary protective measures. The SIPP does not make any warranty or representation regarding, or endorse or otherwise sponsor, any linked websites or the information appearing thereon or any of the products or services described thereon.</p>
                                        <p>YOU AGREE THAT YOUR USE OF THIRD-PARTY WEBSITES AND RESOURCES, INCLUDING WITHOUT LIMITATION YOUR USE OF ANY CONTENT, INFORMATION, DATA, ADVERTISING, PRODUCTS OR OTHER MATERIALS ON OR AVAILABLE THROUGH SUCH WEBSITES AND RESOURCES, IS AT YOUR OWN RISK AND IS SUBJECT TO THE TERMS AND CONDITIONS OF USE APPLICABLE TO SUCH WEBSITES AND RESOURCES.</p>
                                        <h3>VIII. Social Media Pages</h3>
                                        <p>The SIPP maintains a presence on social media websites, including Facebook, YouTube, LinkedIn, Instagram and Twitter (collectively, &quot;Social Media Pages&quot;). All visitors to our Social Media Pages must comply with the respective social media website&#39;s Terms of Use. We take reasonable care in our postings to our Social Media Pages, and may remove, in our  sole discretion,  postings that we determine are inappropriate or offensive.</p>
                                        <h3>IX. User Disagreements</h3>
                                        <p>Your use of the Site and SIP materials and services may bring you into contact with other users, and their User Content, such as through networked game play, chat, and other user communication features of the platform. You are solely responsible for your involvement with other users. If you have a dispute with one or more Users, you release SIPP (and SIPP officers, directors, agents, subsidiaries, joint ventures and employees) from claims, demands and damages (including, but not limited to, actual, special, consequential and punitive) of every kind and nature, known and unknown, arising out of or in any way connected with such disputes.</p>
                                        <h3>X. Confidential Information</h3>
                                        <p>Certain Content, information or software you access through the Site may contain confidential information of SIPP. You agree to keep the same confidential by exercising the necessary care required to prevent its disclosure. Notwithstanding the above, you will not disclose, divulge, distribute, publish, transmit or transfer information to any third party or use the same for any purpose whatsoever other than as expressly authorized by these Terms. Your obligations with respect to the confidential information, whether or not deemed trade secret under applicable law, remain in effect until such time as the particular information becomes publicly known through no action by you.</p>
                                        <h3>XI. Termination</h3>
                                        <p>The Site and this Agreement are in effect until terminated by the SIPP. In addition to any right or remedy that may be available to the SIPP under applicable law, and subject to regulatory requirements, the SIPP may suspend, limit or terminate all or a portion of your access to the Site or any of their features at any time with or without notice and with or without cause, including without limitation, if the SIPP believes that you have violated or acted inconsistently with the letter or spirit of this Agreement. The provisions of this Agreement concerning authorized use, intellectual property rights, user-submitted information, disclaimer of warranty, limitation of liability and indemnity, as well as any other provisions that by their nature should survive, shall survive any such termination.</p>
                                        <p>You agree that if your use of the Site  is terminated pursuant to this Agreement, you will not attempt to use a Site under any name, real or assumed. You further agree that if you violate this restriction after your use of the Site is terminated, you will indemnify and hold us harmless from any and all liability that we may incur therefor. We reserve the right to have all violators prosecuted to the fullest extent of the law.</p>
                                        <h3>XII. Disclaimer of Warranty</h3>
                                        <p>THE SIPP DOES NOT WARRANT OR MAKE ANY REPRESENTATIONS REGARDING THE USE, VALIDITY, ACCURACY, RELIABILITY OF, OR OTHERWISE RESPECTING THE CONTENT AVAILABLE ON THE SITE OR ANY OTHER WEBSITES LINKED TO OR FROM THE WEBSITES. DOWNLOADING OR OTHERWISE OBTAINING ANY CONTENT THROUGH THE WEBSITES IS DONE AT YOUR OWN RISK. THE CONTENT OF THE SITE IS PROVIDED &quot;AS IS&quot; AND ON AN &quot;AS AVAILABLE&quot; BASIS, WITHOUT WARRANTIES OF ANY KIND EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT POSSIBLE UNDER APPLICABLE LAW, THE SIPP DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.</p>
                                        <h3>XIII. Limitation of Liability</h3>
                                        <p>THE SIPP AND EACH OF ITS BOARD MEMBERS, DIRECTORS, OFFICERS, EMPLOYEES, AGENTS AND CONTRACTORS (COLLECTIVELY, THE &quot;RELEASES&quot;) WILL NOT BE LIABLE FOR ANY DAMAGES OF ANY KIND ARISING OUT OF OR RELATING TO THE USE OF OR THE INABILITY TO USE THE SITE, THE SITES’ CONTENT OR LINKS, INCLUDING BUT NOT LIMITED TO DAMAGES CAUSED BY OR RELATED TO ERRORS, OMISSIONS, INTERRUPTIONS, DEFECTS, DELAYs IN OPERATION OR TRANSMISSION, COMPUTER VIRUSES OR LINE FAILURES. THE RELEASEES SHALL NOT HAVE ANY LIABILITY OR RESPONSIBILITY FOR ANY ACTS, OMISSIONS OR CONDUCT OF ANY USER OR OTHER THIRD PARTY.</p>
                                        <p>THE RELEASEES WILL ALSO NOT BE LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL, EXEMPLARY OR CONSEQUENTIAL DAMAGES, EVEN IF THEY HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.</p>
                                        <h3>XIV. Indemnity</h3>
                                        <p>You agree to indemnify and hold harmless the SIPP and its Board members, directors, officers, employees, agents and contractors from and against any and all claims, damages, losses, costs (including without limitation reasonable attorneys&#39; fees) or other expenses that arise directly or indirectly out of or from (a) your breach of any provision of this Agreement; (b) your activities in connection with the Websites; or (c) unsolicited information you provide to the  SIPP through the Websites.</p>
                                        <h3>XV. Applicable Laws</h3>
                                        <p>This Agreement and any claims hereunder will be governed only by the laws of India. You consent to the adjudication of any disputes arising in connection with the Websites in the exclusive jurisdiction and venue of the courts of Hyderabad, India.</p>

                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardBody>
                                        <h2 className='text-center w-100'>PRIVACY POLICY</h2>
                                        <p>The School Innovation Program Partners (“SIPP”) understand, respect and value your privacy, and we want to help make your experience with our Site and SIP material and services satisfying and safe. This policy describes the information we collect on unisolve.org in connection with our Services, and explains how we use and disclose this information. This privacy policy (&quot;Privacy Policy&quot;) sets forth the privacy practices and policies governing our Site. By accessing and/or using the Site, you agree to be bound by the provisions of this Privacy Policy.</p>
                                        <p>There are several ways you can use our services – to get inspired, to share content, participate in the school Program and other events, as and when organized. As you use our Site and SIP materials and services, we want you to be clear how we’re using information and the ways in which you can protect your privacy.


“Personal information”, is any information that enables us to identify you, directly or indirectly, by reference to an identifier such as your name, identification number, location data, online identifier or one or more factors specific to you. Personal information includes “sensitive personal information” and “pseudonymised personal information” but excludes anonymous information or information that has had the identity of an individual permanently removed.
                                        </p>
                                        <p>Please read our Privacy Policy to understand:</p>
                                        <p>We collect the Personal Information, wherever necessary, as part of the SIP for registration, communication, progress tracking and evaluation purposes.</p>
                                        <h3>1. Information We Collect and How We Use It
                                        </h3>
                                        <p>1.1. Information You Provide to Us-  We collect the Personal Information of the participants as part of entry to the School Innovation Program Program 2022 (“SIP”).</p>
                                        <p>1.2. As part of the same, we collect the teachers name, teacher email id, teacher phone number and school details for the registration of the school account. </p>
                                        <p>1.3. We also collect the student name, age and grade details  for the participation and measuring learning outcomes. Personal Information of the students and any other requisite details pertaining to the same are to be filled ONLY by the teacher or school administration and not by the student directly. 
                                        </p>
                                        <p>1.4. The SIPP gathers and retains Personal Information about you, including name, email address, physical address, phone number, or any  other personal or background information when you voluntarily submit it to us.</p>
                                        <p>1.5. Before you can utilize some portions of the Site, we may require that you request access to those portions by providing us with your contact information, a username and a password.</p>
                                        <p>1.6. We will hold and use the Personal Information only as long as is necessary to implement, administer and manage your participation in SIP. 
                                        </p>
                                        <h3>2. Social Networking Activities</h3>
                                        <p>Our Site may allow you to enter social networking websites such as Facebook, Instagram, YouTube, LinkedIn, and Twitter (collectively, “Social Media Pages”). If you choose to follow, like, friend, share, or comment on our Social Media Pages, or otherwise share information on these social networking websites, we may receive information about you. We may use such information about you in a variety of ways, including to enhance your experience with the SIPP outreach and to communicate with you about new SIPP activities. </p>
                                        <h3>3. Site Use Information</h3>
                                        <p>We may collect technical information relating to each time a visitor comes to our Site, including the IP address of visitors to our Site. Such information is considered personal information under this Privacy Policy. We may also collect information about your use of our Site, including number of visits, average time spent on the Site, pages viewed, page response times, download errors, length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouse-overs), methods used to browse away from the page, and any phone number used to call us. Gathering this information helps us to improve the content we offer.  You do not have to register with our Site before we can collect this information. We may also share with third parties this information or other data on an aggregated basis without the use of any information that personally identifies you.</p>
                                        <h3>4. Collection and Monitoring of Information
                                        </h3>
                                        <p>4.1 The Personal Information collected pertaining to teachers and schools is monitored by the  Department of School Education and the teachers submit their personal information for registration and training purposes.</p>
                                        <p>4.2 Personal Information about the students, collected ONLY through teachers and school administration is also monitored by the Education department. </p>
                                        <p>4.3 Student responses are collected as part of the SIP online course through the Site through the modes, including but not limited, to assessments and Idea submission.</p>
                                        <h3>5. How We Use the Information</h3>
                                        <p>5.1. We use your personal information according to the terms of the Privacy Policy in effect at the time of our use. We will only process your personal information, including sharing it with third parties, where (a) you have provided your consent which can be withdrawn at any time, (b) the processing is necessary for the performance of a contract to which you are a party (including your registration or agreements with us), (c) we are required by law, (d) processing is required to protect your vital interests or those of another person, or (e) processing is necessary for the purposes of our legitimate commercial or regulatory interests, provided your interests and fundamental rights do not override those interests;</p>
                                        <p>5.2. We use the collected data to communicate with the teachers to share useful updates about the SIP.</p>
                                        <p>5.3. Student responses are used to track their progress and communicate accordingly to nudge them to complete the Program;</p>
                                        <p>5.4. Student responses are evaluated by SIPP team members to shortlist student teams for further rounds;</p>
                                        <p>5.5. The data collected is used to communicate about the shortlisted students to teachers and students to coordinate with them for further steps;</p>
                                        <p>5.6. Selected students responses, at the sole discretion of SIPP team members,  are shared with industry experts and mentors for feedback purposes;</p>
                                        <p>5.7. To update and communicate with you regarding your account as required;</p>
                                        <p>5.8. To provide you with the information and services you request from usto update and communicate with you regarding your account as required;</p>
                                        <p>5.9. To provide you with the information and services you request from us;</p>
                                        <p>5.10. To notify you about changes to our activities or related services or to ask you to provide feedback;</p>
                                        <p>5.11. To administer and protect our Site (including troubleshooting, data analysis, testing, system maintenance, support, reporting and hosting of data).</p>
                                        <h3>6. Termination and Opting Out of Communications</h3>
                                        <p>6.1 If you have subscribed to or are otherwise receiving SIP news or similar information from us by email and no longer want to receive such information in the future, you may opt out of receiving these emails by clicking the “unsubscribe” link at the bottom of those emails you receive or on the unsubscribe page on the Websites. Please allow ample time for us to process your request. If you are having difficulty unsubscribing, please contact us directly at <a href='info@inqui-lab.org' target="_blank"> info@inqui-lab.org</a></p>
                                        <p>Teachers have full rights to edit and/or request for deletion of Personal Information from their registered accounts if they no longer wish to take part in SIP and its related activities. </p>
                                        <h3>7. Disclosing Information to Third Parties</h3>
                                        <p>7.1. We will not share, rent, sell or otherwise disclose any personal information that we collect about you through our Site, except in any of the following situations or otherwise described in this Privacy Policy: (a) You request or authorize the release of your personal information. (b) With Domain Administrators- Your SIP accounts are managed by web administrators for moderation and troubleshooting. Web administrators may be able to view statistics regarding your account, like statistics regarding applications you install; change your account password; suspend or terminate your account access; access or retain information stored as part of your account; receive your account information in order to satisfy applicable law, regulation, legal process or enforceable governmental request; restrict your ability to delete or edit information or privacy settings. (c ) We may also share aggregated or anonymous information that cannot identify you with third parties. For example, we may disclose the number of visitors to our Websites or the number of people who have downloaded a particular document. (d) We may also share aggregated or anonymous information that cannot identify you with third parties. For example, we may disclose the number of visitors to our  Site or the number of people who have downloaded a particular document.</p>
                                        <h3>8. Security</h3>
                                        <p>We  work hard and take all reasonable steps to protect all user data we collect against any unauthorized access. Please also be aware that despite our best intentions and the guidelines outlined in this Privacy Policy, no data transmission over the Internet or encryption method can be guaranteed to be 100 percent secure. The SIPP cannot guarantee the security of any information you transmit to us or from our Websites, and therefore, you use our Websites at your own risk.</p>
                                        <h3>9. Links to Other Websites</h3>
                                        <p>Our Websites may contain links to other websites, including social media websites hosted by third-party providers; however, this Privacy Policy only addresses the SIPP’s use and disclosure of your information collected through our Websites, if any. If you choose to link to an external website from our Website, you will leave our Website. We are not responsible for the privacy practices of any third parties or the content of linked websites. We highly encourage you to read the applicable privacy policies and terms and conditions of such parties or websites.</p>
                                        <h4>Child Privacy</h4>
                                        <p>Protecting the privacy of our students is especially important. Personal Information about the students is collected ONLY through teachers.</p>
                                        <p>Any student personal information uploaded by you through your registered account shall be considered to have been done accurately and with the requisite consent.</p>
                                        <p>The parent/guardian has the right to review and have any of their child’s information deleted from our records. The parent/guardian also has the right to tell us to stop collecting or using their child’s personal information. </p>
                                        <p>If you have questions concerning our information practices with respect to children, or if you would like to review, have deleted, or stop the further collection of your child’s personal information in connection with the transaction for which it was originally collected, you may email us at <a href='sic@inqui-lab.org' target="_blank"> info@inqui-lab.org</a> </p>
                                        <h3>9. Changes to the Privacy Policy
                                        </h3>
                                        <p>We may occasionally amend this Privacy Policy to reflect SIP activities and user feedback and we reserve the right to make changes to this Privacy Policy at any time. If at any point we decide to use Personal Information in a manner that is materially different from that stated at the time it was collected, we will endeavor to notify you of such changes prior to implementing them by posting a revised Privacy Policy with a new “Last Updated” date, displaying the word “updated” next to the Privacy Policy link on each page of the Site or otherwise.  The use of your information is subject to the Privacy Policy and Terms of Use in effect at the time of use. The provisions contained in this Privacy Policy supersede all previous notices or policies regarding our privacy practices with respect to our Site. We encourage you to check frequently to see the current Privacy Policy to be informed of how the SIP is committed to protecting your information and providing you with improved content on our Sites in order to enhance your experience.</p>
                                        <h3>12. Contact</h3>
                                        <p>If you have any questions or complaints regarding our Privacy Policy or our Site, please contact us at info@inqui-lab.org</p>


                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        
                    </Container>
                </div>
            </section>
            
            
            
            

            

            

            

       

            

            
            <footer className="footer">
                <Container>
                    <Row>
                        <Col md={4} className="footer-section-one">
                            <h2>
                                Unisolve <span>Studio</span>
                            </h2>
                           
                           
                           
                            <div className="d-flex">
                                {/* <figure>
                                    <Link className="" exact="true" to="/">
                                        <img
                                            className="img-fluid"
                                            src={Facebook}
                                            alt="Unisolve Facebook"
                                        />
                                    </Link>
                                </figure> */}
                                {/* <figure className="mx-3">
                                    <Link className="" exact="true" to="/">
                                        <img
                                            className="img-fluid"
                                            src={Twitter}
                                            alt="Unisolve Twitter"
                                        />
                                    </Link>
                                </figure> */}
                                {/* <figure>
                                    <Link className="" exact="true" to="/">
                                        <img
                                            className="img-fluid"
                                            src={LinkedIn}
                                            alt="Unisolve LinkedIn"
                                        />
                                    </Link>
                                </figure> */}
                            </div>
                        </Col>
                        <Col md={8}>
                            <h3>{t('home.footer_imp_links')}</h3>
                            <Row>
                                <Col xs={6} lg={4}>
                                    <Link
                                        className="w-100 d-block mb-3"
                                        exact="true"
                                        to="/"
                                    >
                                        {t('home.footer_home')}
                                    </Link>
                                    <Link
                                        className="w-100 d-block mb-3"
                                        exact="true"
                                        to="/"
                                    >
                                        {t('home.footer_about')}
                                    </Link>
                                    
                                   
                                </Col>
                                
                                <Col sm={12} lg={4} className="mt-4 mt-md-0">
                                    <Link
                                        className="w-100 d-block mb-3"
                                        exact="true"
                                        to="/"
                                    >
                                        {t('home.footer_privacy')}
                                    </Link>
                                    <Link
                                        className="w-100 d-block mb-3"
                                        exact="true"
                                        to="/"
                                    >
                                        {t('home.footer_terms')}
                                    </Link>
                                    
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </footer>
            
        </div>
    );
};

export default Termsandconditions;
