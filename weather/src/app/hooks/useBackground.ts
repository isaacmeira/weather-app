import React, { useEffect, useState } from 'react';

import getBackgroundController from '../entities/controllers/getBackgroundController';

export function useBackgroundHook(): string {
  const [backGround, setBackground] = useState('');

  useEffect(() => {
    getBackgroundController().then(background => setBackground(background));
  }, []);

  return backGround;
}
