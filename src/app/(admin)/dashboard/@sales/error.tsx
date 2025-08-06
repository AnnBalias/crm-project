'use client';

import React from 'react';

export interface Props {
  error: Error;
}

export default function Error({}: Props) {
  return <div>Unexpected error inside slot sales</div>;
}
