export type Plugin = {
  title: string;
  description: string;
};

export type Tab = {
  title: string;
  icon: string;
  active: string[];
  disabled: string[];
  inactive: string[];
};

export type PluginState = {
  tabs: string[];
  tabdata: { [tabName: string]: Tab };
  plugins: {
    [pluginName: string]: Plugin;
  };
};

export type ExportedData = {
  data: PluginState;
  errors: null;
};

export type SuccessResponse = {
  data: {
    status: string;
  };
  errors: null;
};

export type DataPluginUpdate = {
  pluginKey: string;
  toogleValue: boolean;
};
