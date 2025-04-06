import React, { useMemo } from "react";
import "./WorksSpaceCard.scss";
import { Workspace } from "../../types/workspace";
import DirectionIcon from "../../../assets/icons/direction.svg";
import ArrowIcon from "../../../assets/icons/arrow.svg";

interface Props {
  data: Workspace;
  distance: string;
  imageBaseURL: string;
}

const WorkspaceCard: React.FC<Props> = ({ data, imageBaseURL }) => {
  const imageUrl = `${imageBaseURL}/${data.images?.[0]}`;

  const bulkPrice = useMemo(() => {
    const discountInfo = data.day_pass_discounts_percentage[10];
    if (
      discountInfo &&
      discountInfo.message.toLowerCase().includes("pay for")
    ) {
      const match = discountInfo.message.match(/Pay for (\d+)/i);
      if (match) {
        const paidDays = parseInt(match[1]);
        return paidDays * data.day_pass_price;
      }
    }
    const discount = discountInfo?.value ?? 0;
    return data.day_pass_price * 10 * (1 - discount / 100);
  }, [data]);

  return (
    <div className="workspace-card">
      <div className="heading">
        <h3>{data.name}</h3>
        <div className="direction">
          <img src={DirectionIcon} alt="direction" />
          <span>6 Kms</span>
        </div>
      </div>
      <div className="image">
        <img src={imageUrl} alt={data.name} className="workspace-image" />
      </div>
      <div className="info">
        <button className="price-btn">
          <div className="price-label">
            <span className="label">Day Pass</span>
            <span className="price">
              ₹ {data?.day_pass_price}
              <span>/ Day</span>
            </span>
          </div>
          <img src={ArrowIcon} alt="arrow" />
        </button>
        <button className="price-btn discount">
          <div className="price-label">
            <span className="label">Bulk Pass</span>
            <span className="price">
              ₹ {bulkPrice}
              <span>/ 10 Days</span>
            </span>
          </div>
          <img src={ArrowIcon} alt="arrow" />
          <p className="discount-label">20% Discount</p>
        </button>
      </div>
    </div>
  );
};

export default WorkspaceCard;
