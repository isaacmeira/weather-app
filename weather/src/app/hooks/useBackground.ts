import React, { useEffect, useState } from 'react';

import getBackgroundController from '../entities/controllers/getBackgroundController';

export function useBackgroundHook(): string {
  const [backGround, setBackground] = useState<string>('');

  useEffect(() => {
    getBackgroundController().then(background => setBackground(background));
  }, []);

  return backGround;
}
