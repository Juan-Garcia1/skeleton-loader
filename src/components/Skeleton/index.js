import React from "react";
import styled from "styled-components";

const SSkeletonPulse = styled.div`
  display: inline-block;
  //   background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
  background: ${props =>
    props.translucent
      ? `linear-gradient(-90deg, #c1c1c1 0%, #f8f8f8 50%, #c1c1c1 100%)`
      : `linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%)`};
  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

const SSkeletonLine = styled(SSkeletonPulse)`
  width: ${props => (props.width ? props.width + "%" : "100%")};
  height: ${props => (props.height ? props.height + "px" : "14px")};
  border-radius: 2px;
  float: ${props => props.float && props.float};

  &::before {
    content: "\00a0";
  }
`;

const SSkeletonCircle = styled(SSkeletonPulse)`
  border-radius: 50%;
  width: ${props => (props.size ? props.size + "px" : "50px")};
  height: ${props => (props.size ? props.size + "px" : "50px")};
  float: ${props => props.float && props.float};

  &::before {
    content: "\00a0";
  }
`;

export const SkeletonLine = props => <SSkeletonLine {...props} />;
export const SkeletonCircle = props => <SSkeletonCircle {...props} />;
