import {
  Banner,
  reactExtension,
  useSettings,
  useShippingAddress,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const {title: merchantTitle, descriptionf: merchantDescriptionf, description: merchantDescription, collapsible: merchantCollapsible, status: merchantStatus} = useSettings();
  
  const {countryCode} = useShippingAddress();
  //console.log (countryCode);
  const status = merchantStatus ?? 'info';
  const title = merchantTitle ?? 'Banner title';
  const collapsible = merchantCollapsible ?? true;
  const descriptionf = merchantDescriptionf?? "Description goes here"
    return (
      <Banner title={title} status={status} >
        {descriptionf}
      </Banner>
    );
  
    return (<></>) 
}