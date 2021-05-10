import React, { ReactNode } from 'react';
import { isFunction } from '@utils/lang';

export interface RenderPropFunction<Args = WhyAny['GenericTemplateArgument']> {
  (args: Args): React.ReactNode;
}

export const renderChild = <
Args = WhyAny['GenericTemplateArgument']
>(child: ReactNode | RenderPropFunction, args?: Args): ReactNode => {
  if (isFunction(child)) {
    return child(args);
  }
  return child;
}
