import React from 'react';
import {Card} from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";

const TeamCard = () => {
    return (
        <Card className='team-card'>
            <img src="https://rarible.com/bfac800428a4fc671ed9.png" alt="team" className='rouned-10 w-100 mb-3' />

            <h4>Alexei <br />Falin</h4>
            <p>CEO</p>

            <div className="d-flex justify-content-center">
                <Link to="/" className='btn btn-icon p-0 d-flex'><svg viewBox="0 0 18 16" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL m-auto sc-hKwDye bRyxAn"><path d="M17.9655 2.42676C17.3018 2.71851 16.593 2.91726 15.8468 3.00801C16.6073 2.54976 17.1922 1.82751 17.469 0.965759C16.7558 1.38201 15.9653 1.68501 15.1238 1.85376C14.4518 1.13451 13.494 0.684509 12.4305 0.684509C10.3927 0.684509 8.7405 2.33676 8.7405 4.37226C8.7405 4.66476 8.77425 4.94601 8.83575 5.21526C5.76825 5.07051 3.0495 3.59751 1.23 1.37076C0.90975 1.91226 0.7305 2.54151 0.7305 3.22701C0.7305 4.50951 1.383 5.63676 2.3715 6.29901C1.76625 6.27951 1.197 6.11301 0.7005 5.83701V5.88276C0.7005 7.67151 1.97025 9.16326 3.66 9.50301C3.35025 9.58626 3.02325 9.63126 2.688 9.63126C2.4525 9.63126 2.22675 9.60876 2.001 9.56676C2.47425 11.0315 3.83475 12.0995 5.454 12.1295C4.194 13.1188 2.59725 13.7083 0.8775 13.7083C0.585 13.7083 0.29325 13.691 0 13.658C1.64175 14.7035 3.576 15.3148 5.66775 15.3148C12.4583 15.3148 16.167 9.69276 16.167 4.82526C16.167 4.66851 16.167 4.51026 16.1558 4.35276C16.8765 3.83601 17.5057 3.18276 18.0007 2.44176L17.9655 2.42676Z" fill="currentColor"></path></svg></Link>
                <Link to="/" className='btn ms-2 btn-icon p-0 d-flex'><svg viewBox="0 0 16 16" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" class="sc-bdvvtL m-auto sc-hKwDye bRyxAn"><path d="M13.2809 13.2809H11.0583V9.79999C11.0583 8.96989 11.0436 7.90136 9.90237 7.90136C8.74477 7.90136 8.56763 8.80572 8.56763 9.73954V13.2806H6.34514V6.12245H8.47876V7.10068H8.50868C8.94312 6.35783 9.75388 5.91251 10.6138 5.94444C12.8665 5.94444 13.2819 7.42624 13.2819 9.35404L13.2809 13.2809ZM3.83734 5.14396C3.12978 5.14396 2.54727 4.56175 2.54727 3.85413C2.54727 3.14652 3.12951 2.56424 3.83707 2.56424C4.54456 2.56424 5.12672 3.14638 5.12686 3.85386C5.12686 4.56135 4.54476 5.14389 3.83734 5.14396ZM4.9486 13.2809H2.72373V6.12245H4.9486V13.2809ZM14.3889 0.500095H1.60683C1.00682 0.493318 0.507313 0.981255 0.5 1.58131V14.4174C0.507045 15.0179 1.00648 15.5064 1.60683 15.4999H14.3889C14.9907 15.5075 15.4919 15.0191 15.5 14.4174V1.58044C15.4919 0.979108 14.99 0.492178 14.3889 0.500095Z" fill="currentColor"></path></svg></Link>
            </div>
        </Card>
    );
};

export default TeamCard;