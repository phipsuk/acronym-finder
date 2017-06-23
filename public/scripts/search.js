var SiteRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.site.title}</td>
                <td>{this.props.site.link}</td>
            </tr>
        );
    }
});

var SiteTable = React.createClass({
    render: function() {
        var props = this.props;
        var rows = this.props.sites
            .filter(function(site) {
                return site.title.toLowerCase().indexOf(props.filterText.toLowerCase()) > -1;
            })
            .map(function(site) {
            return <SiteRow key={site.title} site={site} />;
        });
        return (
            <div className="row">
                <div className="col-sm-4 col-sm-offset-4">
                    <hr />
                </div>
                <div className="col-sm-4 col-sm-offset-4">
                    <table width="100%">
                        <thead>
                        <tr>
                            <td><div className="title">Acronym</div></td>
                            <td><div className="title">Meaning</div></td>
                        </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
});

var HeaderTitle = React.createClass({
    render: function() {
        return (
            <div className="row">
                <div className="col-sm-4 col-sm-offset-4">
                    <h2>Acronym Finder</h2>
                    <div className="logo"></div>
                </div>
            </div>
        );
    }
});

var SearchBar = React.createClass({
    handleChange: function() {
        this.props.onFilterInput(
            this.refs.filterTextInput.value
        );
    },
    render: function() {
        return (
            <div className="row">
                <div className="col-sm-4 col-sm-offset-4">
                    <input
                        ref="filterTextInput"
                        value={this.props.filterText}
                        onChange={this.handleChange}
                        type="search"
                        className="form-control"
                        placeholder="Enter Acronym"
                    />
                </div>
            </div>
        );
    }
});

var FilterableSiteTable = React.createClass({
    getInitialState: function() {
        return {
            filterText:''
        };
    },
    handleFilterInput: function(filterText) {
        this.setState({
            filterText: filterText
        });
    },
    render: function() {
        return (
            <div className="container" >
                <div className="spacer">
                    <HeaderTitle />
                    <SearchBar
                        onFilterInput={this.handleFilterInput}
                        filterText={this.state.filterText}
                    />
                    <SiteTable
                        filterText={this.state.filterText}
                        sites={this.props.sites}
                    />
                </div>
            </div>
        );
    }
});

var sites = [
    {
        title: 'AE',
        link: 'Accountable executive'
    },
    {
        title: 'AJAX',
        link: 'Asynchronous JavaScript and XML'
    },
    {
        title: 'API',
        link: 'Application Programming Interface'
    },
    {
        title: 'AITPWG',
        link: 'Authentication and Identity Theft Protection Working Group'
    },
    {
        title: 'ALM',
        link: 'Account level messages'
    },
    {
        title: 'ALS',
        link: 'Address Lookup Service'
    },
    {
        title: 'AB',
        link: 'Associate Beta'
    },
    {
        title: 'APWG',
        link: 'Anti-Phishing Work Group'
    },
    {
        title: 'AOTA',
        link: 'Authentication and Online Trust Alliance'
    },
    {
        title: 'ASCM',
        link: 'Application Stage Customer Management'
    },
    {
        title: 'BA',
        link: 'Business Analyst'
    },
    {
        title: 'BAU',
        link: 'Business As Usual'
    },
    {
        title: 'BB2',
        link: 'Branch Banking'
    },
    {
        title: 'BCM',
        link: 'Business Continuity Management'
    },
    {
        title: 'BIM',
        link: 'Business Intent Manager'
    },
    {
        title: 'BIV',
        link: 'Business Intent Validation (data sample)'
    },
    {
        title: 'BP',
        link: 'Bill Pay'
    },
    {
        title: 'BPO',
        link: 'Business Processing Outsourcing'
    },
    {
        title: 'BOA',
        link: 'Branch Operational Assessment'
    },
    {
        title: 'CAN-SPAM',
        link: 'Controlling the Assault of Non-Solicited Pornography and Marketing Act'
    },
    {
        title: 'CARE',
        link: 'Associate Relations system at Capital One'
    },
    {
        title: 'CCB',
        link: 'Chevy Chase Bank'
    },
    {
        title: 'CMS',
        link: 'Content Management System'
    },
    {
        title: 'CSS',
        link: 'Cascading Style Sheets'
    },
    {
        title: 'CCL',
        link: 'Capital One Card Lab'
    },
    {
        title: 'CDI',
        link: 'Customer Data Integration'
    },
    {
        title: 'COEP',
        link: 'Capital One Europe Plc'
    },
    {
        title: 'CEMP',
        link: 'Customer Experience Metric Program'
    },
    {
        title: 'CFA',
        link: 'Central Fulfilment Area'
    },
    {
        title: 'CFIT',
        link: 'Campaign Fulfillment - IT'
    },
    {
        title: 'CHI',
        link: 'Customer Hassel Index'
    },
    {
        title: 'CIIG',
        link: 'Card IT Investment Governance'
    },
    {
        title: 'CLARITY',
        link: 'Project Tracking Tool'
    },
    {
        title: 'CLIP',
        link: 'Credit Line Increase Program'
    },
    {
        title: 'CM',
        link: 'Customer Management or Creative Manager (depending on context)'
    },
    {
        title: 'CMP',
        link: 'Compliance Management Program'
    },
    {
        title: 'COAF',
        link: 'Capital One Auto Finance'
    },
    {
        title: 'COF',
        link: 'Capital One Financial'
    },
    {
        title: 'COHL',
        link: 'Capital One Home Loan'
    },
    {
        title: 'COIN',
        link: 'Capital One Internal Network'
    },
    {
        title: 'COOB',
        link: 'Capital One Online Banking'
    },
    {
        title: 'COPPA',
        link: "Children's Online Privacy Protection Act"
    },
    {
        title: 'COTS',
        link: 'Commercial Off-the-Shelf'
    },
    {
        title: 'CBP',
        link: 'Critical Business Processes'
    },
    {
        title: 'CRM',
        link: 'Credit Risk Management'
    },
    {
        title: 'CRD',
        link: 'Creation Date'
    },
    {
        title: 'CSG',
        link: 'Customer Service Group'
    },
    {
        title: 'CTA',
        link: 'Cost to Acquire'
    },
    {
        title: 'CUPID',
        link: 'Customer Portal Investigation Decisioning Service'
    },
    {
        title: 'CTQ',
        link: 'Critical to Quality (BPM Tool)'
    },
    {
        title: 'CV',
        link: 'Creative Variable'
    },
    {
        title: 'D4E',
        link: 'Design for Execution'
    },
    {
        title: 'DA',
        link: 'Data Analyst'
    },
    {
        title: 'DBR',
        link: 'Detailed Business Requirements'
    },
    {
        title: 'DDE',
        link: 'Data Distribution Environment (bulk and real time data transfer)'
    },
    {
        title: 'DD',
        link: 'Direct Debit'
    },
    {
        title: 'DLBR',
        link: 'Detail Level Business Requirements'
    },
    {
        title: 'DHTML',
        link: 'Dynamic HyperText Markup Language'
    },
    {
        title: 'DOM',
        link: 'Document Object Model'
    },
    {
        title: 'DIP',
        link: '(Flow for Email Drive to Web Process)'
    },
    {
        title: 'DMA',
        link: 'Direct Marketing Association'
    },
    {
        title: 'DM',
        link: 'Direct Marketing'
    },
    {
        title: 'DMSG',
        link: 'Digital Messaging IT'
    },
    {
        title: 'DMO',
        link: 'Direct Marketing Operations or Direct Marketing Outsight'
    },
    {
        title: 'DPC',
        link: 'Delivery Process Cycle'
    },
    {
        title: 'DQ',
        link: 'Data Quality'
    },
    {
        title: 'DREAM',
        link: 'Epsilon Test System'
    },
    {
        title: 'DWH',
        link: 'Data Warehouse'
    },
    {
        title: 'EBM',
        link: 'Event-based Messaging'
    },
    {
        title: 'EC',
        link: 'EC table'
    },
    {
        title: 'EPUB',
        link: 'Electronic Publication'
    },
    {
        title: 'ECM',
        link: 'Enterprise Customer Management'
    },
    {
        title: 'EDD',
        link: 'Email Deliverables Document or Execution Deliverable Document'
    },
    {
        title: 'EDE',
        link: 'Enterprise Data Exchange (used for secure 3rd parties)'
    },
    {
        title: 'EDM',
        link: 'Electronic Direct Mail'
    },
    {
        title: 'EDW',
        link: 'Enterprise Data Warehouse'
    },
    {
        title: 'ELA',
        link: 'Enterprise Language Associates'
    },
    {
        title: 'EMS',
        link: 'Event Management System'
    },
    {
        title: 'EMV',
        link: 'Europay, MasterCard and Visa - Global standard for inter-operation of integrated circuit cards (IC cards or "chip cards") and IC card capable point of sale (POS) terminals and automated teller machines (ATMs), for authenticating credit and debit card transactions.'
    },
    {
        title: 'EOS',
        link: 'Enterprise Online Servicing'
    },
    {
        title: 'Epsilon',
        link: '3rd Party to pull together emails from various sources'
    },
    {
        title: 'ERB',
        link: 'Email Review Board reviews/approves creatives to ensure adherement to Digital Creative standards'
    },
    {
        title: 'ERDM',
        link: 'Enterprise Reference Data Management'
    },
    {
        title: 'ET',
        link: 'Exact Target (Acxiom ET Platform)'
    },
    {
        title: 'EUID',
        link: 'Employee Unique Identification'
    },
    {
        title: 'FCRA',
        link: 'Fair Credit Reporting Act (Affiliate Sharing provisions)'
    },
    {
        title: 'FCA',
        link: 'Financial Conduct Authority'
    },
    {
        title: 'FDR',
        link: 'Vendor that handles Capital One Statements'
    },
    {
        title: 'FF',
        link: 'Flow for Email Drive to Web Process'
    },
    {
        title: 'FI',
        link: 'Financial Institute'
    },
    {
        title: 'FICO',
        link: "Fair Isaac Corporation (The largest and best known of several companies that provide software for calculating a person's credit score.)"
    },
    {
        title: 'FICO Score',
        link: "The FICO model is used by the vast majority of banks and credit grantors, and is based on consumer credit files of the three national credit bureaus: Experian, Equifax, and TransUnion. Because a consumer's credit file may contain different information at each of the bureaus, FICO scores can vary depending on which bureau provides the information to FICO to generate the score."
    },
    {
        title: 'FLI',
        link: 'Foreign Language Indicator'
    },
    {
        title: 'FMEA',
        link: 'Failure Mode and Effects Analysis'
    },
    {
        title: 'FMU',
        link: 'File Upload & Mail Trigger Utility (used by Epsilon)'
    },
    {
        title: 'FS',
        link: 'Financial Services'
    },
    {
        title: 'FSU',
        link: 'File Sweeper Utility'
    },
    {
        title: 'GD',
        link: 'Graphic Designer'
    },
    {
        title: 'GLBA',
        link: 'Gramm Leach Bliley Act (Opt Out, Data Security, and non-affiliate sharing)'
    },
    {
        title: 'GMC',
        link: 'Get My Card - This program allows the customer to get their plastic online at getmycard.com'
    },
    {
        title: 'GRC',
        link: 'Governance, Risk Mgmt., Compliance (highly configurable COTS pkg)'
    },
    {
        title: 'GRR',
        link: 'Gross Response Rate'
    },
    {
        title: 'GIF',
        link: 'Graphics Interchange Format'
    },
    {
        title: 'GUI',
        link: "Graphical User Interface - (pronounced GOO-ee). A program interface that takes advantage of a computer's graphics capabilities to make the program easier to use."
    },
    {
        title: 'GUID',
        link: 'Graphical User Identification'
    },
    {
        title: 'HBLR',
        link: 'High Level Business Requirements'
    },
    {
        title: 'HTML',
        link: 'HyperText Markup Language'
    },
    {
        title: 'HPSM',
        link: 'HP Service Manager'
    },
    {
        title: 'HFM',
        link: 'Horizontal Financial Management'
    },
    {
        title: 'HIPAA',
        link: 'Health Insurance Portability and Accountability Act'
    },
    {
        title: 'HITECH Act',
        link: 'Health Information Technology for Economic and Clinical Health Act (resulting from HIPAA)'
    },
    {
        title: 'HS',
        link: 'House Style'
    },
    {
        title: 'ICORE',
        link: 'Integrated Channel Offer and Response Engine - A Web-based system that enables real-time decisioning for our credit card applications. An acquisitions Internet channel.'
    },
    {
        title: 'IFM',
        link: 'Integrated Fulfillment Mgr'
    },
    {
        title: 'ILD',
        link: 'IL Domestic'
    },
    {
        title: 'IP',
        link: 'Internet Protocol'
    },
    {
        title: 'Interstitials',
        link: 'A page within a banner that holds an action for a customer.'
    },
    {
        title: 'IPS',
        link: 'Integrated Production Services or Intent Planning System'
    },
    {
        title: 'ISL',
        link: 'Zone - How to Request a Campaign - Matrix'
    },
    {
        title: 'ISP',
        link: 'Internet Service Provider'
    },
    {
        title: 'IPS',
        link: 'Intent Planning System or Integrated Production Services'
    },
    {
        title: 'ISRM',
        link: 'Information Security and Risk Management'
    },
    {
        title: 'ISSO',
        link: 'Individualized Single Sign On (Used for BANK (OLB) and CARD (EOS) for customer log ins'
    },
    {
        title: 'ITCP',
        link: 'Identity Theft Control Plan'
    },
    {
        title: 'JSON',
        link: 'JavaScript Object Notation'
    },
    {
        title: 'JS',
        link: 'JavaScript'
    },
    {
        title: 'KL',
        link: 'KnowledgeLink'
    },
    {
        title: 'LDAP',
        link: 'Lightweight Directory Access Protocol - This is secured by communicating through an SSL tunnel.'
    },
    {
        title: 'LAMP',
        link: 'A type of platform for website development which uses Linux, Apache, MySQL and PHP. The term LAMP is an acronym of the mentioned technologies.'
    },
    {
        title: 'LoB',
        link: 'Line of Business'
    },
    {
        title: 'LOE',
        link: 'Level of Effort'
    },
    {
        title: 'M1',
        link: 'Marketing One'
    },
    {
        title: 'MAAWG',
        link: 'Messaging Anti-Abuse Working Group'
    },
    {
        title: 'MC',
        link: 'MasterCard'
    },
    {
        title: 'MOI',
        link: 'Marketing One Intent'
    },
    {
        title: 'MP',
        link: 'Motion Point (Vendor for French Language)'
    },
    {
        title: 'MPM',
        link: 'Marketing Product Manager'
    },
    {
        title: 'MS',
        link: 'Marketing Specialist or Mainstreet'
    },
    {
        title: 'MTA',
        link: 'Mail Transfer Agent'
    },
    {
        title: 'NABs',
        link: 'New Accounts Booked'
    },
    {
        title: 'NCAA',
        link: 'National Collegiate Athletic Association (campaign related to Basketball)'
    },
    {
        title: 'NDB',
        link: 'National Direct Bank'
    },
    {
        title: 'NPAP',
        link: 'Non Pre-approved'
    },
    {
        title: 'NPI',
        link: 'Non-Public Information'
    },
    {
        title: 'NPMIG',
        link: 'New Product Marketing & Initiatives Governance (approves Intent and Segmentation)'
    },
    {
        title: 'NRR',
        link: 'Net Response Rate'
    },
    {
        title: 'OAO',
        link: 'Online Account Opening'
    },
    {
        title: 'OBS',
        link: 'Online Banking Solutions'
    },
    {
        title: 'ODS',
        link: 'Operational Data Store'
    },
    {
        title: 'OLB',
        link: 'Online Banking'
    },
    {
        title: 'OOB',
        link: 'Online OnBoarding'
    },
    {
        title: 'ORB',
        link: 'Online Review Board reviews/approves for WWW/Servicing/Mobile to ensure adherement to Digital Creative standards'
    },
    {
        title: 'ORD',
        link: 'Operational Requirements Document'
    },
    {
        title: 'OSR',
        link: 'Online Statement Ready'
    },
    {
        title: 'OTS',
        link: 'Offer Treatment System'
    },
    {
        title: 'OTD',
        link: 'On-time Delivery'
    },
    {
        title: 'OTT',
        link: 'Offer Treatment Template - Excel document populated by the End to End (E2E) with the help of the Segmentation and Validation Data Analyst (SDA / VDA), Intent Owner (IO) and Central Fulfillment Area (CFA), as needed, in order to translate the business intent of each campaign. (Flow for Email Drive to Web Process)'
    },
    {
        title: 'PAP',
        link: 'Pre-approved'
    },
    {
        title: 'PSD2',
        link: 'Payment Services Directive Two'
    },
    {
        title: 'PHP',
        link: 'Abbreviation for PHP: HyperText Preprocessor, PHP is used as web development language although it can also be used for other programming tasks.'
    },
    {
        title: 'PAT',
        link: 'Flow for Email Drive to Web Process'
    },
    {
        title: 'pBAD',
        link: 'possibly a server or table name'
    },
    {
        title: 'PCI DSS',
        link: 'Payment Card Industry Data Security Standard'
    },
    {
        title: 'PEDW',
        link: 'Product Enterprise Data Warehouse'
    },
    {
        title: 'PHI',
        link: 'Protected Health Information'
    },
    {
        title: 'PIPEDA',
        link: 'Personal Information Protection and Electronic Documents Act'
    },
    {
        title: 'PI',
        link: 'Program Increment (as in PI planning)'
    },
    {
        title: 'PLOU',
        link: 'data location at Epsilon used in file transfer process'
    },
    {
        title: 'POD',
        link: 'Email PM, Designer, and Copywriter getting together on an initiative'
    },
    {
        title: 'PM',
        link: 'Product Manager'
    },
    {
        title: 'PO',
        link: 'Product Owner'
    },
    {
        title: 'PROBE',
        link: 'Realtime offer matching system'
    },
    {
        title: 'PSA',
        link: 'Privacy Suppression Application'
    },
    {
        title: 'PSIS8/Camp',
        link: 'Drop site for file transmission with Epsilon'
    },
    {
        title: 'QC',
        link: 'Quick Check'
    },
    {
        title: 'QE',
        link: 'Quality Engineer'
    },
    {
        title: 'RACI',
        link: 'Responsible, Accountable, Consulted, Informed (BPM Tool)'
    },
    {
        title: 'RAPID',
        link: 'Realtime Agent Portal Investigation Decisioning Service'
    },
    {
        title: 'RC',
        link: 'Review Center'
    },
    {
        title: 'RSS',
        link: 'Really Simple Syndication'
    },
    {
        title: 'RCE',
        link: 'Response Capture Engine (System Unavail. Page) ** Replaced by SSP'
    },
    {
        title: 'RFPA',
        link: 'Right to Financial Privacy Act (prohibits sharing financial unless excepted, e.g. federal government subpoena after customer is notified of request and approved by Legal)'
    },
    {
        title: 'RPN',
        link: 'Risk Priority No. (Severity + Frequency + Detectability)'
    },
    {
        title: 'RRD',
        link: 'Vendor that handles Capital One Statements'
    },
    {
        title: 'RSA',
        link: 'Vendor that handles authentication services'
    },
    {
        title: 'RTE',
        link: 'Run the Engine'
    },
    {
        title: 'RTM',
        link: 'Real Time Messaging'
    },
    {
        title: 'RTPM',
        link: 'Real Time Product Matching'
    },
    {
        title: 'S&Rs',
        link: 'Suppressed & Rejects'
    },
    {
        title: 'Sass',
        link: 'Syntactically Awesome Style Sheets'
    },
    {
        title: 'SB',
        link: 'Small Business'
    },
    {
        title: 'SEO',
        link: 'Search Engine Optimisation'
    },
    {
        title: 'SBB',
        link: 'Savings in Branch Banking'
    },
    {
        title: 'SBL',
        link: 'Small Business Loans'
    },
    {
        title: 'SBM',
        link: 'SB Money Market'
    },
    {
        title: 'SCMP',
        link: 'Software Configuration Management Plan'
    },
    {
        title: 'SC',
        link: 'Secured Card'
    },
    {
        title: 'SEM',
        link: 'Search Engine Module or Strategy Exec. Module'
    },
    {
        title: 'SEO',
        link: 'Search Engine Optimization'
    },
    {
        title: 'ST',
        link: 'System Test'
    },
    {
        title: 'SIT',
        link: 'System Intergration Test'
    },
    {
        title: 'Skittle',
        link: 'Relase Schedule'
    },
    {
        title: 'SM',
        link: 'Secured Messaging'
    },
    {
        title: 'SMTP',
        link: 'Secured Messaging Transfer Protocol (?)'
    },
    {
        title: 'SOL',
        link: 'Solicitation'
    },
    {
        title: 'SOR',
        link: 'System of Record'
    },
    {
        title: 'SP',
        link: 'Sub-Prime'
    },
    {
        title: 'SRs',
        link: 'System Requirements'
    },
    {
        title: 'SSO',
        link: 'Single Sign-On'
    },
    {
        title: 'SSP',
        link: 'Sales & Service Portal'
    },
    {
        title: 'SMTD',
        link: 'System Maintenance Technical Document'
    },
    {
        title: 'STUG',
        link: 'Staging Tables User Guide'
    },
    {
        title: 'TCPA',
        link: 'Telephone Consumer Protection Act'
    },
    {
        title: 'TCR',
        link: 'Test Completion Report'
    },
    {
        title: 'TDP',
        link: 'Technical Deployment Document'
    },
    {
        title: 'TE',
        link: 'Technical Editor'
    },
    {
        title: 'TLP',
        link: 'TSYS Loyalty Program (Rewards System)'
    },
    {
        title: 'TPM',
        link: 'Technical Program Manager'
    },
    {
        title: 'TPM',
        link: 'Third Party Management'
    },
    {
        title: 'TSR',
        link: 'Telemarketing Sales Rule'
    },
    {
        title: 'TSYS',
        link: 'Mainframe Trouble Reporting System'
    },
    {
        title: 'UAT',
        link: 'User Acceptance Testing (also called BPT)'
    },
    {
        title: 'UIF',
        link: 'Universal Intent Form (Card Request Form for Projects)'
    },
    {
        title: 'UIDCHN',
        link: 'User ID Change'
    },
    {
        title: 'UCD',
        link: 'Uncontrolled Domain'
    },
    {
        title: 'UM',
        link: 'Upmarket'
    },
    {
        title: 'VC',
        link: 'Vendor Cells or Value Chain'
    },
    {
        title: 'VPN',
        link: 'Virtual Private Network'
    },
    {
        title: 'WC',
        link: 'West Creek'
    },
    {
        title: 'WIP',
        link: 'Work in Progress'
    },
    {
        title: 'WRQ',
        link: 'Work Requests Queue'
    },
    {
        title: 'XHTML',
        link: 'eXtensible HyperText Markup Language'
    },
    {
        title: 'XML',
        link: 'eXtensible Markup Language'
    },
    {
        title: 'ZIP',
        link: 'Zone Improvement Plan'
    }
];

ReactDOM.render(
    <FilterableSiteTable sites={sites} />,
    document.getElementById('content')
);