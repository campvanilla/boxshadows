import React from 'react';
import {isFunction} from '@utils/lang';
import { WhyAny } from '@src/global';

interface RenderPropFunction<Args = WhyAny['GenericTemplateArgument']> {
  (args?: Args): React.ReactNode;
}

export const renderChild = <Args = WhyAny['GenericTemplateArgument']>(child: React.ReactNode | RenderPropFunction, args?: Args) => {
  if (isFunction(child)) {
    return child(args);
  }
  return child;
}
