import { useSelector } from "react-redux";
import CollectionPreview from "../components/CollectionPreview";

import styled from "styled-components";

const CollectionOverview = () => {
  const collections = useSelector((state) => state.shop.collections);

  return (
    <CollectionOverviewWrapper>
      {collections &&
        collections.map(({ id, ...props }) => (
          <CollectionPreview key={id} {...props} />
        ))}
    </CollectionOverviewWrapper>
  );
};

export default CollectionOverview;

const CollectionOverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;