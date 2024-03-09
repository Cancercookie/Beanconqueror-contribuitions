import { IBeanVisualizer } from './iBeanVisualizer';
import { IBrewVisualizer } from './iBrewVisualizer';
import { IMillVisualizer } from './iMillVisualizer';
import { IPreparationVisualizer } from './iPreparationVisualizer';
import { IWaterVisualizer } from './iWaterVisualizer';
import { BrewFlow } from '../../classes/brew/brewFlow';

export interface IVisualizer {
  bean: IBeanVisualizer;
  brew: IBrewVisualizer;
  mill: IMillVisualizer;
  preparation: IPreparationVisualizer;
  water: IWaterVisualizer;
  brewFlow: BrewFlow;
  application: string;
}
