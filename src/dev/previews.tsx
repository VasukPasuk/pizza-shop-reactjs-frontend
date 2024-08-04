import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox';
import { PaletteTree } from './palette';
import ShopPage from '../components/pages/Shop/Shop.page.tsx';

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/ShopPage">
        <ShopPage />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
