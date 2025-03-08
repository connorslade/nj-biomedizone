<script>
    import Text from "../lib/Text.svelte";
    import Link from "../lib/Link.svelte";
    import Subtitle from "../lib/Subtitle.svelte";

    import Officers from "../components/Officers.svelte";
    import Blogs from "../components/Blogs.svelte";
</script>

<Subtitle title="About Us" />

<p>
    This is the official website for the <Link
        href="https://www.biomedizone.org">Biomedizone</Link
    > New Jersey Chapter.
</p>
<br />

<Text>
    At BioMedizone, we hold events to support students interested in the
    biomedicine field. Our initiative is to help fund research and education of
    those incapable of doing so. Through partnerships with local medical
    organizations, we create a network of resources that empowers young minds to
    explore the world of biomedicine. Our goal is not only to support academic
    growth but also to inspire the next generation of innovators who can
    contribute to the future of healthcare and medical research.
</Text>

<Officers />
<Blogs />
