interface DesignConfiguratorProps{
    configId : string,
    imageUrl : string,
    imageDimensions : {width : number ; height : number}
}

const DesignConfigurator = ({configId,imageUrl,imageDimensions} : DesignConfiguratorProps) => {
  return (
    <div>DesignConfigurator</div>
  )
}

export default DesignConfigurator